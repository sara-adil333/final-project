import { Request, Response, Express } from "express";
import express from 'express'
import  env  from "dotenv"
import { customErrorHandler, DefaultErrorHandler } from "./middleware/errorHandler.js";
import dataSource from "./db/dbConfig.js";
import shop from "./routes/shop.js";
import product from "./routes/product.js";
import hotline from "./routes/hotline.js";
import category from "./routes/category.js";


const app = express();
env.config();
const PORT = process.env.PORT || 5000;
app.use(express.json())

app.use(customErrorHandler)
app.use(DefaultErrorHandler)

app.use( "/shop" , shop )
app.use("/product" , product)
app.use("/hotline" , hotline)
app.use("/category" , category)


dataSource.initialize().then(() => {
    console.log("connected to DB");
}).catch(err => {
    console.error('Failed to connect to DB: ' + err);
});





app.listen(PORT , ()=> {
    console.log(`server is running on host:http://localhost:${PORT}`);
})
export default app 
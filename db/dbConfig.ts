import { DataSource } from "typeorm"
import { Category } from "./entities/Category.js"
import { Hotline } from "./entities/Hotline.js"
import { Product } from "./entities/Product.js"
import { Shop } from "./entities/Shop.js"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "shop",
    synchronize: true,
    logging: false,
    entities: [Category , Hotline , Product ,Shop],
    
})

export default AppDataSource
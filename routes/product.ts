import { NextFunction, Router } from "express";
import { Product } from "../db/entities/Product.js";
import { AppError } from "../errors/AppErrors.js";
import { Request, Response } from "express";
import { createProduct, getAllProducts, getSingleProducr } from "../controller/product.js";

const router = Router() ;


router.post('/', async (req :Request, res:Response, next:NextFunction) => {
    try {
        const {name , price } = req.body;

        if (!name || !price === undefined) {
            throw new AppError("Missing required fields", 400, true);
        }

        const newproductData = { name , price };
        const product = await createProduct(newproductData as Product);

        res.status(201).json({
            message: "product created successfully",
            product:product
        });
    } catch (error) {
        next(error);
    }
});

router.get("/" , getAllProducts)

router.get("/:id", async (req: Request, res: Response, next: NextFunction)=>{
    try {
        const productId = Number(req.params.id)
        const product = await getSingleProducr(productId)

        console.log("entered");
        res.json({
            product :product
                })

       
    } catch (error) {
        console.log("error: " + error);
        next(error)
    }
})
export default router
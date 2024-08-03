import { NextFunction, Router } from "express";
import { Shop } from "../db/entities/Shop.js";
import { AppError } from "../errors/AppErrors.js";
import { Request, Response } from "express";
import { Category } from "../db/entities/Category.js";
import { createCategory, getAllcategories } from "../controller/category.js";

const router = Router() ;


router.post("/", async (req:Request, res:Response, next:NextFunction)=>{

    const payload:Category = req.body;

    if(!payload.name  ){
        res.json({
            messege:"Some feilds are missing",
            success: false
        })
        return;
    }
    try {
        const category = await createCategory(payload)

        res.json({
            messege:"category created successfully",
            success: true
        })
    } catch (error) {
        console.log("Error" + error);
        next(error)
    }

})

router.get("/" , getAllcategories)


export default router
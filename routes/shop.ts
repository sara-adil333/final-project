import { NextFunction, Router } from "express";
import { Shop } from "../db/entities/Shop.js";
import { AppError } from "../errors/AppErrors.js";
import { createShop, getAllshops, getSingleshop } from "../controller/shop.js";
import { Request, Response } from "express";

const router = Router() ;


router.post("/", async (req:Request, res:Response, next:NextFunction)=>{

    const payload:Shop = req.body;

    if(!payload.shopName || !payload.email || !payload.password ){
        res.json({
            messege:"Some feilds are missing",
            success: false
        })
        return;
    }
    try {
        const shop = await createShop(payload)

        res.json({
            messege:"shop created successfully",
            success: true
        })
    } catch (error) {
        console.log("Error" + error);
        next(error)
    }

})

router.get("/" , getAllshops)

router.get("/:id", async (req: Request, res: Response, next: NextFunction)=>{
    try {
        const shopIdId = Number(req.params.id)
        const shop = await getSingleshop(shopIdId)

        console.log("entered");
        res.json({
                   shop :shop
                })

       
    } catch (error) {
        console.log("error: " + error);
        next(error)
    }
})

export default router
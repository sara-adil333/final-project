import { NextFunction, Router } from "express";
import { AppError } from "../errors/AppErrors.js";
import { Request, Response } from "express";
import { Hotline } from "../db/entities/Hotline.js";
import { createhotline, getAllhotline, getSinglehotline } from "../controller/hotline.js";


const router = Router() ;


router.post("/", async (req:Request, res:Response, next:NextFunction)=>{

    const payload:Hotline = req.body;

    if(!payload.hotlineNumber ){
        res.json({
            messege:"Some feilds are missing",
            success: false
        })
        return;
    }
    try {
        const hotline = await createhotline(payload)

        res.json({
            messege:"hotline created successfully",
            success: true
        })
    } catch (error) {
        console.log("Error" + error);
        next(error)
    }

})

router.get("/" , getAllhotline)

router.get("/:id", async (req: Request, res: Response, next: NextFunction)=>{
    try {
        const hotlineId = Number(req.params.id)
        const hotlin = await getSinglehotline(hotlineId)

        console.log("entered");
        res.json({
            hotlin :hotlin
                })

       
    } catch (error) {
        console.log("error: " + error);
        next(error)
    }
})

export default router

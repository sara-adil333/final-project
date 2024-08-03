import { Hotline } from "../db/entities/Hotline.js";
import { Response , Request } from "express";
import { AppError } from "../errors/AppErrors.js";


const createhotline = async (hotFromPostman: Hotline) => {

        const existingHotline = await Hotline.findOne({ where: {id: hotFromPostman.id } });

        if (existingHotline) {
            throw new AppError("hotline already exists", 409, true);
        }

        const hotline  = new Hotline ;
        hotline.id = hotFromPostman.id;
        hotline.hotlineNumber = hotFromPostman.hotlineNumber;
        
        hotline.save() ;
    }

    const getSinglehotline = async(hotlineId :any)=>{
        const hotline = await Hotline.findOne({where:{id : hotlineId}})
    
        if(!hotline){
            throw new AppError("hotline not found" ,404 , true)
           
        }
        return hotline
    }

    const getAllhotline = async (req : Request , res : Response)=>{
        const hotline = await Hotline.find()
   
        res.json({
           message: "getting all hotlines successfully" ,
           status: true,
           hotline :hotline
        })
   
   }
   export{createhotline , getSinglehotline  , getAllhotline}
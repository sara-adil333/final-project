import { Shop } from "../db/entities/Shop.js";
import { Response , Request } from "express";
import { AppError } from "../errors/AppErrors.js";


const createShop = async (ShopFromPostman: Shop) => {

        const existingShop = await Shop.findOne({ where: {id: ShopFromPostman.id } });

        if (existingShop) {
            throw new AppError("shop already exists", 409, true);
        }

        const shop  = new Shop ;
        shop.id = ShopFromPostman.id;
        shop.shopName = ShopFromPostman.shopName;
        
        shop.save() ;
    }

    const getSingleshop = async(shopId :any)=>{
        const shop = await Shop.findOne({where:{id : shopId}})
    
        if(!shop){
            throw new AppError("shop not found" ,404 , true)
           
        }
        return shop
    }

    const getAllshops = async (req : Request , res : Response)=>{
        const shop = await Shop.find()
   
        res.json({
           message: "getting all shops successfully" ,
           status: true,
           shop :shop
        })
   
   }

   export {createShop , getAllshops , getSingleshop}

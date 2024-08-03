import { Category } from "../db/entities/Category.js";
import { Response , Request } from "express";
import { AppError } from "../errors/AppErrors.js";


const createCategory = async (categoryFromPostman: Category) => {

        const existingCategory = await Category.findOne({ where: {id: categoryFromPostman.id } });

        if (existingCategory) {
            throw new AppError("category already exists", 409, true);
        }

        const category  = new Category ;
        category.id = categoryFromPostman.id;
        category.name = categoryFromPostman.name;
        
        category.save() ;
    }

    const getAllcategories = async (req : Request , res : Response)=>{
        const category = await Category.find()
   
        res.json({
           message: "getting all categories successfully" ,
           status: true,
           category :category
        })
   
   }

   export {createCategory , getAllcategories}

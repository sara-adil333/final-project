import { Product } from "../db/entities/Product.js";
import { Response , Request } from "express";
import { AppError } from "../errors/AppErrors.js";


const createProduct = async (productFromPostman: Product) => {

        const existingProduct = await Product.findOne({ where: {id: productFromPostman.id } });

        if (existingProduct) {
            throw new AppError("product already exists", 409, true);
        }

        const product  = new Product ;
        product.id = productFromPostman.id;
        product.name = productFromPostman.name;
        product.price= productFromPostman.price;
        product.save() ;
    }

    const getSingleProducr = async(productId :any)=>{
        const product = await Product.findOne({where:{id : productId}})
    
        if(!product){
            throw new AppError("product not found" ,404 , true)
           
        }
        return product
    }

    const getAllProducts = async (req : Request , res : Response)=>{
         const product = await Product.find()
    
         res.json({
            message: "getting all product successfully" ,
            status: true,
            product :product
         })
    
    }

    export {createProduct , getSingleProducr , getAllProducts}
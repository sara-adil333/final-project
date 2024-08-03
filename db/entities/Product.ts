import { Entity, Column, PrimaryGeneratedColumn, DataSource, BaseEntity, ManyToOne, ManyToMany, JoinColumn } from "typeorm"
import { Shop } from "./Shop.js";
import { Category } from "./Category.js";

@Entity("product")
export class Product extends BaseEntity {
    @PrimaryGeneratedColumn("increment")
    id: number

    @Column({ length: 255})
    name: string;

    @Column()
     price: string;


    @ManyToOne(()=> Shop , shop => shop.products)
    shop : Partial<Shop>
   
    @ManyToMany(()=> Category , category => category.product)
    @JoinColumn({
        name:"categoryId",
        referencedColumnName : "id"
     })
    category : Category[]

    

}
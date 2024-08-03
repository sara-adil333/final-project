import { Entity, Column, PrimaryGeneratedColumn, DataSource, BaseEntity, JoinColumn, OneToOne } from "typeorm"
import { Shop } from "./Shop.js";


@Entity("hotline")
export class Hotline extends BaseEntity {
    @PrimaryGeneratedColumn("increment")
    id: number

    @Column()
    hotlineNumber: number;

     @OneToOne(()=> Shop , Shop => Shop.hotline)
     @JoinColumn({
        name:"shopId",
        referencedColumnName : "id"
     })
     shop : Partial<Shop>
     

}


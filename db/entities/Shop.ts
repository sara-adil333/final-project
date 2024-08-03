import { Entity, Column, PrimaryGeneratedColumn, DataSource, BaseEntity, OneToMany, OneToOne, JoinColumn, BeforeInsert } from "typeorm"
import { Product } from "./Product.js";
import { Hotline } from "./Hotline.js";
import bcrypt from "bcrypt"
@Entity("shop")
export class Shop extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ length: 255})
    shopName: string;

    @Column({ length: 255})
    email: string;

    @Column({ length: 255})
    password: string;
    
    @OneToMany(()=> Product , product => product.shop)
    products : Product[]

    @OneToOne(()=> Hotline , hotline => hotline.shop)
    hotline: Partial<Hotline>

    @BeforeInsert()
    async hashPassword() {
        if (this.password) {
            this.password = await bcrypt.hash(this.password, 10);
        }
    }
}
import {
  Entity,
  OneToMany,
  JoinColumn,
  OneToOne,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Product } from 'src/products/entities/product.entity';
// import { Users } from "src/auth/user.entity";

@Entity()
export class OrderEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @OneToMany((type) => Product, (item) => item.id)
  items: Product[];

  //   @OneToOne((type) => Users, (user) => user.username)
  //   @JoinColumn()
  //   user: Users;

  @Column()
  subTotal: number;

  @Column({ default: false })
  pending: boolean;
}

import {
  Column,
  CreateDateColumn,
  Entity,
  //JoinColumn,
  //OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('Users') //table name
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  address: string;

  @Column()
  password: string;

  @Column()
  role: string;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createAt: string;

  @CreateDateColumn()
  updteAt: string;

  //   @OneToMany((type) => CartEntity, (cart) => cart.id)
  //   @JoinColumn()
  //   cart: CartEntity[];

  //   @OneToMany((type) => OrderEntity, (order) => order.id)
  //   @JoinColumn()
  //   order: OrderEntity;
}

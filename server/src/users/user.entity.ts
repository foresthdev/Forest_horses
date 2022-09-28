import {
  Column,
  CreateDateColumn,
  Entity,
  //JoinColumn,
  //OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';

import { IsEmail } from 'class-validator'; //valida el email

@Entity('Users') //table name
export class User {
  @PrimaryGeneratedColumn() //@ decorador funcion lo siguiente se tansforma en columnas con atributos
  id: number;

  @Column()
  fullName: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  address: string;

  @Column({ unique: true }) //unico y validado que tenga un formato email
  @IsEmail()
  email: string;

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

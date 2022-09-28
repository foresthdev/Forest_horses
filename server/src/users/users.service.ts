import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDTO } from './dtos/create-user-dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<User> {
    // In the nestjs documentation (https://docs.nestjs.com/techniques/database) say id: string pero da error
    return this.usersRepository.findOneBy({ id });
  }

  // async addUser(user: CreateUserDTO): Promise<User> {
  //   const newUser = new User();
  //   newUser.email
  //   newUser.password = await bcrypt.hash(newUser.password, 10);
  //   return this.usersRepository.save(newUser);
  // }

  appdate(user: UserDTO){// metodo que actualiza las dades con un findOne

  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}

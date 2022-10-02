import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { UserDTO } from './dtos/user-dto';
//import * as bcrypt from 'bcrypt';

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

  async update(id: number, user: UserDTO): Promise<any> {
    // metodo que actualiza las dades
    const updateUser = await this.usersRepository.findOneBy({ id });
    updateUser.address = user.address;
    updateUser.city = user.city;
    updateUser.provincia = user.provincia;
    updateUser.country = user.country;
    updateUser.phone = user.phone;

    return await this.usersRepository.save(updateUser);
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}

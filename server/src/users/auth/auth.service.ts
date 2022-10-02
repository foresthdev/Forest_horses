import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user.entity';
import * as bcrypt from 'bcrypt';
import { CreateUserDTO } from '../dtos/create-user-dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private jwt: JwtService,
  ) {}

  //signup method allow users to register in the app
  async signup(user: CreateUserDTO): Promise<User> {
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(user.password, salt);
    const newUser = new User(); //info de la clase User
    newUser.fullName = user.fullname; //los campos del DTO se guardan y se salvan en BD
    newUser.password = hash;
    newUser.email = user.email;
    return await this.userRepository.save(newUser);
  }

  // method to validate the users’ details
  async validateUser(fullName: string, password: string): Promise<any> {
    const foundUser = await this.userRepository.findOneBy({ fullName });
    if (foundUser) {
      if (await bcrypt.compare(password, foundUser.password)) {
        const { password, ...result } = foundUser;
        return result;
      }

      return null;
    }
    return null;
  }

  //login method to generate a jwt token for the authenticated user.
  async login(user: any) {
    const payload = { username: user.username, sub: user.id, role: user.role };

    return {
      access_token: this.jwt.sign(payload),
    };
  }
}

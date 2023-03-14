import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  async signup() {
    return { message: 'sigup was succeful' };
  }
  async signin() {
    return '';
  }
  async signout() {
    return '';
  }
}

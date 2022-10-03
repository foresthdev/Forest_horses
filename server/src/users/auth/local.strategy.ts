// authentication strategy using JSON Web Tokens (JWT). This will return a JWT for logged users for use in subsequent calls to protected API endpoints.
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    const foundUser = await this.authService.validateUser(username, password);
    if (!foundUser) {
      throw new UnauthorizedException();
    }
    return foundUser;
  }
}

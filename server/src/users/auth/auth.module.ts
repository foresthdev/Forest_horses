import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { JwStrategy } from './jwt-strategy';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
//import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user.entity';
import { Repository } from 'typeorm';
import { UsersService } from '../users.service';
import { UsersModule } from '../users.module';

//Module in nestjs are built asynchronously. Meaning they have to be structured like a cascading tree with one module importing all the others. Something linear will look like this
@Module({
  providers: [AuthService, LocalStrategy, User, UsersService, JwStrategy],
  controllers: [AuthController],
  imports: [
    UsersModule,
    Repository,
    PassportModule.register({
      defaultStrategy: 'jwt',
    }),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60m' },
    }),
  ],
  exports: [AuthService],
})
export class AuthModule {}

// we add the PassModule package to allow passport to handle the users’ authentication and configured jwt using the JwtModule register method. We pass in the secret we created in the constants file and specify the generated token’s expiration time

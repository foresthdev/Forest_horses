import { Controller, Get, Param } from '@nestjs/common';
import { UseGuards } from '@nestjs/common/decorators';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  getMyUser(@Param() params: { id: number }) {
    return this.usersService.getMyUser(params.id);
  }

  @Get()
  getUsers() {
    return this.usersService.getUsers();
  }
}

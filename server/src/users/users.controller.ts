import { Body, Controller, Put } from '@nestjs/common';
import { UserDTO } from './dtos/user-dto';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  @Put('mevesdades') // Hay info previa y se añade info
  async update(@Body() user: UserDTO): Promise<User> {
    // CreateUserDTO usurio minmo
    return this.usersService.update(user);
  }
}

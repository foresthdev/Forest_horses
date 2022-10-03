import { Body, Controller, Put, Param } from '@nestjs/common';
import { UserDTO } from './dtos/user-dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Put('user') // Hay info previa y se añade info
  async update(
    @Param('id') id: number,
    @Body() updateUser: UserDTO,
  ): Promise<any> {
    // UserDTO usurio minmo
    return this.usersService.update(id, updateUser);
  }
}

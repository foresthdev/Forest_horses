import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async getMyUser(id: string) {}

  async getUsers() {
    return await this.prisma.user.findMany({
      //only show id and email
      select: { id: true, email: true },
    });
  }
}

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async getMyUser(id: number) {
    const user = await this.prisma.user.findUnique({ where: { id: +id } });

    return { user };
  }

  async getUsers() {
    return await this.prisma.user.findMany({
      //only show id and email
      select: { id: true, email: true },
    });
  }
}

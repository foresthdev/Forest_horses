import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Request } from 'express';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async getMyUser(id: number, req: Request) {
    const user = await this.prisma.user.findUnique({ where: { id: +id } });

    //If no user no found send message error
    if (!user) {
      throw new NotFoundException();
    }

    const decodedUser = req.user as { id: number; email: string };

    // only the same id can see the details id
    if (user.id !== decodedUser.id) {
      throw new ForbiddenException();
    }

    delete user.hashedPassword;
    return { user };
  }

  async getUsers() {
    return await this.prisma.user.findMany({
      //only show id and email
      select: { id: true, email: true },
    });
  }
}

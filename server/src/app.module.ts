import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './products/products.controller';
import { Product } from './products/entities/product.entity';
import { ProductsService } from './products/products.service';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from 'prisma/prisma.module';
import { PrismaService } from 'prisma/prisma.service';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'nest',
      password: 'app',
      database: 'forest_horses',
      entities: [Product],
      synchronize: true, //shouldn't be used in production - otherwise you can lose production data.
    }),
    TypeOrmModule.forFeature([Product]),
    AuthModule,
    PrismaModule,
  ],
  controllers: [AppController, AuthController, ProductsController],
  providers: [AppService, AuthService, PrismaService, ProductsService],
})
export class AppModule {}

// synchronize tells TypeORM to automatically create or update the tables in the database based on the entity classes passed to the entities

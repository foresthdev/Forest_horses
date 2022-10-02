import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './users/user.entity';
import { AuthModule } from './users/auth/auth.module';
import { ProductsController } from './products/products.controller';
import { Product } from './products/entities/product.entity';
import { ProductsService } from './products/products.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'nest',
      password: 'app',
      database: 'forest_horses',
      entities: [Product, User],
      synchronize: true, //shouldn't be used in production - otherwise you can lose production data.
    }),
    AuthModule,
    TypeOrmModule.forFeature([Product]),
  ],
  controllers: [AppController, ProductsController],
  providers: [AppService, ProductsService],
})
export class AppModule {}

// synchronize tells TypeORM to automatically create or update the tables in the database based on the entity classes passed to the entities

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product-dto';
import { Request } from 'express';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async getAll(request: Request): Promise<Product[]> {
    return await this.productRepository.find(request.query);
  }

  async createProduct(newProduct: CreateProductDto): Promise<Product> {
    const nuevo = new Product();
    nuevo.name = newProduct.name;
    nuevo.description = newProduct.description;
    nuevo.img = newProduct.img;
    nuevo.price = newProduct.price;
    return this.productRepository.save(nuevo);
  }

  async updateProduct(
    idProduct: number,
    actualizeProduct: CreateProductDto,
  ): Promise<Product> {
    const productUpdate = await this.productRepository.findOne({
      where: { id: idProduct },
    });
    productUpdate.name = actualizeProduct.name;
    productUpdate.description = actualizeProduct.description;
    productUpdate.img = actualizeProduct.img;
    productUpdate.price = actualizeProduct.price;

    return await this.productRepository.save(productUpdate);
  }

  async deleteProduct(idProduct: number): Promise<any> {
    return await this.productRepository.delete(idProduct);
  }
}

import {
  Body,
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Res,
  HttpStatus,
  Param,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { CreateProductDto } from './dto/create-product-dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto, @Res() response) {
    this.productsService
      .createProduct(createProductDto)
      .then((product) => {
        response.status(HttpStatus.CREATED).json(product);
      })
      .catch(() => {
        response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'error' });
      });
  }
  @Get()
  async findAll(@Req() request: Request) {
    return this.productsService.getAll(request);
  }

  @Put(':id')
  update(
    @Body() updateProductDto: CreateProductDto,
    @Res() response,
    @Param('id') idJob,
  ) {
    this.productsService
      .updateProduct(idJob, updateProductDto)
      .then((product) => {
        response.status(HttpStatus.OK).json(product);
      })
      .catch(() => {
        response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'error' });
      });
  }

  @Delete(':id')
  delete(@Res() response, @Param('id') productId) {
    this.productsService
      .deleteProduct(productId)
      .then((res) => {
        response.status(HttpStatus.OK).json(res);
      })
      .catch(() => {
        response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'error' });
      });
  }
}

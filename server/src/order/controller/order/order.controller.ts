import { Controller, Post, Get, Request, UseGuards } from '@nestjs/common';
import { OrderService } from 'src/order/service/order/order.service';
import { OrderEntity } from 'src/order/order.entity';
// import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('api/v1/order')
export class OrderController {
  constructor(private orderService: OrderService) {}

  //   @UseGuards(JwtAuthGuard)
  @Post()
  async order(@Request() req): Promise<any> {
    return this.orderService.order(req.user.username);
  }

  //   @UseGuards(JwtAuthGuard)
  @Get()
  async getOrders(@Request() req): Promise<OrderEntity[]> {
    return await this.orderService.getOrders(req.user.username);
  }
}

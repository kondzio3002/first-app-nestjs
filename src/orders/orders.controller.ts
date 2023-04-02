import {
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  NotFoundException,
  Delete,
  Post,
  Body
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDTO } from './dtos/create-order.dto';

@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @Get('/')
  getAll(): any {
    return this.ordersService.getAll();
  }

  @Get('/:id')
  getById(@Param('id', new ParseUUIDPipe()) id: string) {
    if (!this.ordersService.getById(id))
      throw new NotFoundException('Order not found');

    return this.ordersService.getById(id);
  }

  @Delete('/:id')
  deleteById(@Param('id', new ParseUUIDPipe()) id: string) {
    if (!this.ordersService.getById(id))
      throw new NotFoundException('Order not found');

    this.ordersService.deleteById(id);
    return { success: true};
  }

  @Post('/')
  create(@Body() orderData: CreateOrderDTO) {
    return this.ordersService.create(orderData);
  }
}

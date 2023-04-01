import { Injectable } from '@nestjs/common';
import { Product, db } from 'src/db';

@Injectable()
export class ProductsService {
  public getAll(): Product[] {
    return db.products;
  }
}

import { Injectable } from '@nestjs/common';
import { Product, db } from 'src/db';

@Injectable()
export class ProductsService {
  public getAll(): Product[] {
    return db.products;
  }

  public getById(id: Product['id']): Product | null {
    return db.products.find(p => p.id === id);
  }
}

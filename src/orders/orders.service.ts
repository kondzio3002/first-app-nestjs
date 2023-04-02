import { Injectable } from '@nestjs/common';
import { Order, db } from 'src/db';

@Injectable()
export class OrdersService {
  public getAll(): Order[] {
    return db.orders;
  }

  public getById(id: Order['id']): Order | null {
    return db.orders.find(o => o.id === id);
  }

  public deleteById(id: Order['id']): void {
    db.orders = db.orders.filter(p => p.id !== id);
  }
}

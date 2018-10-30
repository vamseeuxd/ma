import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {IItem, ItemsService} from '../items/items.service';
import {CustomersService, ICustomer} from '../customers/customers.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  get customers(): Observable<ICustomer[]> {
    return this.customersService.customers$;
  }

  get items(): Observable<IItem[]> {
    return this.itemService.items$;
  }

  private ordersRef: AngularFireList<IOrder>;
  public orders$: Observable<IOrder[]>;
  public orders: IOrder[];

  constructor(
    db: AngularFireDatabase,
    private itemService: ItemsService,
    private customersService: CustomersService) {

    this.ordersRef = db.list('orders');
    this.orders$ = this.ordersRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => {
          const customer = this.customersService.customers.filter(
            _customer => (_customer.key === c.payload.val()['customerID']),
          )[0];
          const item = this.itemService.items.filter(
            _item => (_item.key === c.payload.val()['itemID']),
          )[0];
          return ({key: c.payload.key, ...c.payload.val(), customer, item});
        }),
      ),
    );
    this.orders$.subscribe(orders => {
      this.orders = orders;
    });
  }

  public addItem(customerID: string, itemID: string) {
    this.ordersRef.push({customerID, itemID});
  }

  public updateItem(key: string, order: { customerID: string, itemID: string }) {
    this.ordersRef.update(key, order);
  }

  public deleteItem(key: string) {
    this.ordersRef.remove(key);
  }

  public deleteEverything() {
    this.ordersRef.remove();
  }
}

export interface IOrder {
  key?: string;
  customer?: ICustomer;
  item?: IItem;
  customerID: string;
  itemID: string;
}

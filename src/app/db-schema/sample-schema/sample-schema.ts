import {Injectable} from '@angular/core';
import 'rxjs-compat/add/observable/of';
import {AngularFireDatabase} from '@angular/fire/database';
import {Observable} from 'rxjs';
import 'rxjs-compat/add/operator/switchMap';
import 'rxjs-compat/add/operator/combineLatest';
import 'rxjs-compat/add/operator/map';
import {map, switchMap} from 'rxjs/operators';
import 'rxjs/add/observable/combineLatest';

@Injectable({
  providedIn: 'root',
})
export class SampleSchema {
  constructor(private db: AngularFireDatabase) {
    this.getOrders().subscribe(
      orders => {
        console.log(orders);
      },
    );
  }

  getCustomers(key) {
    return this.db.object(`customers/${key}`).snapshotChanges().pipe(
      switchMap(
        customer => ([{key: customer.payload.key, ...customer.payload.val()}]),
      ));
  }

  getItem(key) {
    return this.db.object(`items/${key}`).snapshotChanges().pipe(
      switchMap(
        item => ([{key: item.payload.key, ...item.payload.val()}]),
      ));
  }

  getOrders() {
    return this.db.list(`orders`).snapshotChanges().pipe(
      map(orders =>
        orders.map(order => ({key: order.payload.key, ...order.payload.val()})),
      ),
    ).pipe(
      switchMap(
        orders => {
          return Observable.combineLatest(orders.map(this.getOrderWithCustomer.bind(this)));
        },
      ),
    ).pipe(
      switchMap(
        orders => {
          return Observable.combineLatest(orders.map(this.getOrderWithItem.bind(this)));
        },
      ),
    );
  }

  getOrderWithCustomer(order) {
    return this.getCustomers(order.customerID).map(
      customer => {
        return {
          ...order,
          customer: customer,
        };
      },
    ).pipe(
      map(_order => {
        delete _order.customerID;
        return _order;
      }),
    );
  }

  getOrderWithItem(order) {
    return this.getItem(order.itemID).map(
      item => {
        return {
          ...order,
          item: item,
        };
      },
    ).pipe(
      map(_order => {
        delete _order.itemID;
        return _order;
      }),
    );
  }
}

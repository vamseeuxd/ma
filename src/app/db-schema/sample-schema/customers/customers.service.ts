import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {

  private customersRef: AngularFireList<ICustomer>;
  public customers$: Observable<ICustomer[]>;
  public customers: ICustomer[];

  constructor(db: AngularFireDatabase) {
    this.customersRef = db.list('customers');
    this.customers$ = this.customersRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({key: c.payload.key, ...c.payload.val()})),
      ),
    );
    this.customers$.subscribe(customers => {
      this.customers = customers;
    });
  }

  public addItem(newName: string) {
    this.customersRef.push({text: newName});
  }

  public updateItem(key: string, newText: string) {
    this.customersRef.update(key, {text: newText});
  }

  public deleteItem(key: string) {
    this.customersRef.remove(key);
  }

  public deleteEverything() {
    this.customersRef.remove();
  }
}

export interface ICustomer {
  key?: string;
  text: string;
}


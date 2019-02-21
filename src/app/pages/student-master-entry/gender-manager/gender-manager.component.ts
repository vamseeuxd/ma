import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'ngx-gender-manager',
  templateUrl: './gender-manager.component.html',
  styleUrls: ['./gender-manager.component.scss'],
})
export class GenderManagerComponent {

  itemsRef: AngularFireList<any>;
  items: Observable<any[]>;

  constructor(private db: AngularFireDatabase) {
    this.itemsRef = db.list('gender');
    this.items = this.itemsRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => {
          return ({key: c.payload.key, ...c.payload.val()});
        }),
      ),
    );
  }

  addItem(gender: string) {
    this.itemsRef.push({value: gender});
  }

  updateItem(key: string, gender: string) {
    this.itemsRef.update(key, {value: gender});
  }

  deleteItem(key: string) {
    this.itemsRef.remove(key);
  }

  deleteEverything() {
    this.itemsRef.remove();
  }

}

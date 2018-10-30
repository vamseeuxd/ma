import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {

  private itemsRef: AngularFireList<IItem>;
  public items$: Observable<IItem[]>;
  public items: IItem[];

  constructor(db: AngularFireDatabase) {
    this.itemsRef = db.list('items');
    this.items$ = this.itemsRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({key: c.payload.key, ...c.payload.val()})),
      ),
    );
    this.items$.subscribe(_item => {
      this.items = _item;
    });
  }

  public addItem(newName: string) {
    const duplicateItems: IItem[] = this.items.filter(_item => (_item.text.toLowerCase() === newName.toLowerCase()));
    if (duplicateItems.length === 0) {
      this.itemsRef.push({text: newName});
    } else {
      alert('Already Item Exits with "' + newName + '",Item name should be unique!');
    }
  }

  public updateItem(key: string, newText: string) {
    const duplicateItems: IItem[] = this.items.filter(
      _item => (
        _item.text.toLowerCase() === newText.toLowerCase() &&
        _item.key !== key
      ),
    );
    if (duplicateItems.length === 0) {
      this.itemsRef.update(key, {text: newText});
    } else {
      alert('Already Item Exits with "' + newText + '",Item name should be unique!');
    }
  }

  public deleteItem(key: string) {
    this.itemsRef.remove(key);
  }

  public deleteEverything() {
    this.itemsRef.remove();
  }
}

export interface IItem {
  key?: string;
  text: string;
}

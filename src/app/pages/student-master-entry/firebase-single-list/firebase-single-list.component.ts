import {Component, Input, OnInit} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {Observable} from 'rxjs';
import {ToasterService} from 'angular2-toaster';
import {map} from 'rxjs/operators';

@Component({
  selector: 'ngx-firebase-single-list',
  templateUrl: './firebase-single-list.component.html',
  styleUrls: ['./firebase-single-list.component.scss'],
})
export class FirebaseSingleListComponent implements OnInit {

  itemsRef: AngularFireList<any>;
  items: Observable<any[]>;
  items_arr: any[];
  itemForUpdate = '';
  @Input() tableName = '';
  @Input() itemName = '';

  constructor(private db: AngularFireDatabase, public toasterService: ToasterService) {

  }

  addItem(gender) {
    if (gender.value.trim() !== '') {
      if (this.items_arr.filter(item => (item.value.toLowerCase() === gender.value.toLowerCase())).length === 0) {
        this.itemsRef.push({value: gender.value}).then(result => {
          this.toasterService.pop('success', this.itemName + ' Added successfully');
        }, error => {
          this.toasterService.pop('danger', JSON.stringify(error));
        });
        gender.value = '';
      } else {
        alert('Duplicate Warning: Already a ' + this.itemName + ' exist with "' + gender.value + '".');
      }
    } else {
      alert('Invalid Text Warning: Please provide valid ' + this.itemName + '.');
    }
  }

  updateItem(key: string, gender) {
    if (gender.value.trim() !== '') {
      if (this.items_arr.filter(item => {
        if (item.key !== key) {
          return item.value.toLowerCase() === gender.value.toLowerCase();
        } else {
          return false;
        }
      }).length === 0) {
        this.itemsRef.update(key, {value: gender.value}).then(result => {
          this.toasterService.pop('success', this.itemName + ' Updated successfully');
        }, error => {
          this.toasterService.pop('danger', JSON.stringify(error));
        });
        gender.value = '';
        this.itemForUpdate = '';
      } else {
        alert('Duplicate Warning: Already a Gender exist with "' + gender.value + '".');
      }
    } else {
      alert('Invalid Text Warning: Please provide valid ' + this.itemName + '.');
    }
  }

  deleteItem(key: string) {
    const isConfirm = confirm('Are you sure!, do you want to delete?');
    if (isConfirm) {
      this.itemsRef.remove(key + '11321').then(result => {
        this.toasterService.pop('success', this.itemName + ' Deleted successfully');
      }, error => {
        this.toasterService.pop('danger', JSON.stringify(error));
      });
    }
  }

  deleteEverything() {
    this.itemsRef.remove();
  }

  ngOnInit(): void {
    if (this.tableName) {
      this.itemsRef = this.db.list(this.tableName);
      this.items = this.itemsRef.snapshotChanges().pipe(
        map(changes =>
          changes.map(c => {
            return ({key: c.payload.key, ...c.payload.val()});
          }),
        ),
      );
      this.items.subscribe(_items => {
        this.items_arr = _items;
      });
    }
  }

}

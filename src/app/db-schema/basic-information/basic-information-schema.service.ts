import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireObject} from '@angular/fire/database';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {BasicInformationVO} from './basic-information-vo';

@Injectable({
  providedIn: 'root',
})
export class BasicInformationSchemaService {
  itemRef: AngularFireObject<BasicInformationVO>;
  item: Observable<BasicInformationVO>;

  constructor(db: AngularFireDatabase) {
    this.itemRef = db.object('basicInformation');
    this.item = this.itemRef.valueChanges();
  }

  subscribe(next?: (value: BasicInformationVO) => void, error?: (error: any) => void, complete?: () => void) {
    return this.item.subscribe(next, error, complete);
  }

  save(vo: BasicInformationVO) {
    this.itemRef.set({...vo});
  }

  update(vo: BasicInformationVO) {
    this.itemRef.update({...vo});
  }

  delete() {
    this.itemRef.remove();
  }
}

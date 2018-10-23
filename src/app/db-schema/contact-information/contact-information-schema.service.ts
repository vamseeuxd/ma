import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireObject} from '@angular/fire/database';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ContactInformationVO} from './contact-information-vo';

@Injectable({
  providedIn: 'root',
})
export class ContactInformationSchemaService {
  itemRef: AngularFireObject<ContactInformationVO>;
  item: Observable<ContactInformationVO>;

  constructor(db: AngularFireDatabase) {
    this.itemRef = db.object('contactInformation');
    this.item = this.itemRef.valueChanges();
  }

  subscribe(next?: (value: ContactInformationVO) => void, error?: (error: any) => void, complete?: () => void) {
    return this.item.subscribe(next, error, complete);
  }

  save(vo: ContactInformationVO) {
    this.itemRef.set({...vo});
  }

  update(vo: ContactInformationVO) {
    this.itemRef.update({...vo});
  }

  delete() {
    this.itemRef.remove();
  }
}

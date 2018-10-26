import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireObject} from '@angular/fire/database';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {GlobalSettingsVo} from './global-settings-vo';

@Injectable({
  providedIn: 'root',
})
export class GlobalSettingsSchemaService {
  itemRef: AngularFireObject<GlobalSettingsVo>;
  item: Observable<GlobalSettingsVo>;

  constructor(db: AngularFireDatabase) {
    this.itemRef = db.object('globalSettings');
    this.item = this.itemRef.valueChanges();
  }

  subscribe(next?: (value: GlobalSettingsVo) => void, error?: (error: any) => void, complete?: () => void) {
    return this.item.subscribe(next, error, complete);
  }

  save(vo: GlobalSettingsVo) {
    this.itemRef.set({...vo});
  }

  update(vo: GlobalSettingsVo) {
    this.itemRef.update({...vo});
  }

  delete() {
    this.itemRef.remove();
  }
}

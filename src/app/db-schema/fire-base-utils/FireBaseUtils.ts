import {Injectable} from '@angular/core';
import 'rxjs-compat/add/observable/of';
import {AngularFireDatabase} from '@angular/fire/database';
import {Observable} from 'rxjs';
import 'rxjs-compat/add/operator/combineLatest';
import 'rxjs-compat/add/operator/map';
import {map, switchMap} from 'rxjs/operators';
import 'rxjs/add/observable/combineLatest';

@Injectable({
  providedIn: 'root',
})
export class FireBaseUtils {
  constructor(private db: AngularFireDatabase) {
    /*
    const listName = 'orders';
    const relationMaps = [
      {foreignKey: 'customerID', tableName: 'customers'},
      {foreignKey: 'itemID', tableName: 'items'},
    ];
    this.getRelationDataList({listName, relationMaps}).subscribe(
      orders => {
        console.log(JSON.stringify(orders, null, 2));
      },
    );
    */
  }

  private getRelatedData(key, tableName) {
    return this.db.object(`${tableName}/${key}`).snapshotChanges().pipe(
      switchMap(
        item => ([{key: item.payload.key, ...item.payload.val()}]),
      ));
  }

  getRelationDataList(config: RelationalListConfig) {
    let returnValue;
    returnValue = this.db.list(config.listName).snapshotChanges().pipe(
      map(mainDataList =>
        mainDataList.map(order => ({key: order.payload.key, ...order.payload.val()})),
      ),
    );
    if (config.relationMaps) {
      config.relationMaps.forEach(relation => {
        returnValue = this.addCombineLatestPipe(returnValue, relation.foreignKey, relation.tableName);
      });
    }
    return returnValue;
  }

  private addCombineLatestPipe(result: Observable<any>, foreignKey, tableName) {
    return result.pipe(
      switchMap(
        orders => {
          return Observable.combineLatest(orders.map(order => this.mergeRelationalData(order, foreignKey, tableName)));
        },
      ),
    );
  }

  private mergeRelationalData(mainData, foreignKey, tableName) {
    return this.getRelatedData(mainData[foreignKey], tableName).map(
      data => {
        let returnValue = {};
        returnValue = {
          ...mainData,
        };
        returnValue[tableName] = data;
        return returnValue;
      },
    ).pipe(
      map(data => {
        delete data[foreignKey];
        return data;
      }),
    );
  }

  add(obj: any, tablePath: string) {
    return this.db.list(tablePath).push(obj);
  }

  update(key: string, obj: any, tablePath: string) {
    return this.db.list(tablePath).update(key, {...obj});
  }

  delete(key: string, tablePath: string) {
    return this.db.list(tablePath).remove(key);
  }

  deleteAll(tablePath: string) {
    return this.db.list(tablePath).remove();
  }
}

export interface RelationalListConfig {
  listName: string;
  relationMaps?: { foreignKey: string, tableName: string }[];
}

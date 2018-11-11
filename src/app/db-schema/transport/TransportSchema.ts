import {Injectable} from '@angular/core';
import 'rxjs-compat/add/observable/of';
import {AngularFireDatabase} from '@angular/fire/database';
import {Observable} from 'rxjs';
import 'rxjs-compat/add/operator/combineLatest';
import 'rxjs-compat/add/operator/map';
import {map, switchMap} from 'rxjs/operators';
import 'rxjs/add/observable/combineLatest';
import {FireBaseUtils} from '../fire-base-utils/FireBaseUtils';

@Injectable({
  providedIn: 'root',
})
export class TransportSchema {
  transportMasterEntries: TransportMasterEntry[];
  vehicles: Vehicle[];
  fuelDetails: Fuel[];
  readingDetails: Reading[];
  stoppages: Stoppage[];
  routes: Route[];
  stopToRoutes: StopToRoute[];
  staffToRoutes: StaffToRoute[];
  studentToRoutes: StudentToRoute[];


  constructor(private fireBaseUtils: FireBaseUtils) {

  }

  public transportMasterEntry = {
    list: this.fireBaseUtils.getRelationDataList({listName: 'Transport/transportMasterEntry'}).pipe(
      map(
        (options: any[]) => {
          return options.map(option => {
            return new TransportMasterEntry(option['routeTo'], option['status'], option['key']);
          });
        },
      )
    ),
    add: (valueObject: TransportMasterEntry) => {
      return this.fireBaseUtils.add(valueObject, 'Transport/transportMasterEntry');
    },
    update: (key: string, valueObject: TransportMasterEntry) => {
      return this.fireBaseUtils.update(key, {...valueObject}, 'Transport/transportMasterEntry');
    },
    delete: (key: string) => {
      return this.fireBaseUtils.delete(key, 'Transport/transportMasterEntry');
    },
    deleteAll: () => {
      return this.fireBaseUtils.deleteAll('Transport/transportMasterEntry');
    },
  };

  public vehicle = {
    list: this.fireBaseUtils.getRelationDataList({listName: 'Transport/vehicles'}),
    add: (valueObject: Vehicle) => {
      return this.fireBaseUtils.add(valueObject, 'Transport/vehicles');
    },
    update: (key: string, valueObject: Vehicle) => {
      return this.fireBaseUtils.update(key, {...valueObject}, 'Transport/vehicles');
    },
    delete: (key: string) => {
      return this.fireBaseUtils.delete(key, 'Transport/vehicles');
    },
    deleteAll: () => {
      return this.fireBaseUtils.deleteAll('Transport/vehicles');
    },
  };

  public fuel = {
    list: this.fireBaseUtils.getRelationDataList({
      listName: 'Transport/fuel',
      relationMaps: [{foreignKey: 'vehicleId', tableName: 'Transport/vehicles'}],
    }),
    add: (valueObject: Fuel) => {
      valueObject['vehicleId'] = valueObject.vehicle.key;
      delete valueObject.vehicle;
      return this.fireBaseUtils.add(valueObject, 'Transport/fuel');
    },
    update: (key: string, valueObject: Fuel) => {
      valueObject['vehicleId'] = valueObject.vehicle.key;
      delete valueObject.vehicle;
      return this.fireBaseUtils.update(key, {...valueObject}, 'Transport/fuel');
    },
    delete: (key: string) => {
      return this.fireBaseUtils.delete(key, 'Transport/fuel');
    },
    deleteAll: () => {
      return this.fireBaseUtils.deleteAll('Transport/fuel');
    },
  };

  public reading = {
    list: this.fireBaseUtils.getRelationDataList({
      listName: 'Transport/reading',
      relationMaps: [{foreignKey: 'vehicleId', tableName: 'Transport/vehicles'}],
    }),
    add: (valueObject: Reading) => {
      valueObject['vehicleId'] = valueObject.vehicle.key;
      delete valueObject.vehicle;
      this.fireBaseUtils.add(valueObject, 'Transport/reading');
    },
    update: (key: string, valueObject: Reading) => {
      valueObject['vehicleId'] = valueObject.vehicle.key;
      delete valueObject.vehicle;
      return this.fireBaseUtils.update(key, {...valueObject}, 'Transport/reading');
    },
    delete: (key: string) => {
      return this.fireBaseUtils.delete(key, 'Transport/reading');
    },
    deleteAll: () => {
      return this.fireBaseUtils.deleteAll('Transport/reading');
    },
  };
  /* ----------------------------------------------   ----------------------------------------------    ---------------------------------------------- */
  public stoppage = {
    list: this.fireBaseUtils.getRelationDataList({listName: 'Transport/stoppage'}),
    add: (valueObject: Stoppage) => {
      return this.fireBaseUtils.add(valueObject, 'Transport/stoppage');
    },
    update: (key: string, valueObject: Stoppage) => {
      return this.fireBaseUtils.update(key, {...valueObject}, 'Transport/stoppage');
    },
    delete: (key: string) => {
      return this.fireBaseUtils.delete(key, 'Transport/stoppage');
    },
    deleteAll: () => {
      return this.fireBaseUtils.deleteAll('Transport/stoppage');
    },
  };

  public route = {
    list: this.fireBaseUtils.getRelationDataList({listName: 'Transport/route'}),
    add: (valueObject: Route) => {
      return this.fireBaseUtils.add(valueObject, 'Transport/route');
    },
    update: (key: string, valueObject: Route) => {
      return this.fireBaseUtils.update(key, {...valueObject}, 'Transport/route');
    },
    delete: (key: string) => {
      return this.fireBaseUtils.delete(key, 'Transport/route');
    },
    deleteAll: () => {
      return this.fireBaseUtils.deleteAll('Transport/route');
    },
  };

  public stopToRoute = {
    list: this.fireBaseUtils.getRelationDataList({listName: 'Transport/stopToRoute'}),
    add: (valueObject: StopToRoute) => {
      return this.fireBaseUtils.add(valueObject, 'Transport/stopToRoute');
    },
    update: (key: string, valueObject: StopToRoute) => {
      return this.fireBaseUtils.update(key, {...valueObject}, 'Transport/stopToRoute');
    },
    delete: (key: string) => {
      return this.fireBaseUtils.delete(key, 'Transport/stopToRoute');
    },
    deleteAll: () => {
      return this.fireBaseUtils.deleteAll('Transport/stopToRoute');
    },
  };

  public staffToRoute = {
    list: this.fireBaseUtils.getRelationDataList({listName: 'Transport/staffToRoute'}),
    add: (valueObject: StaffToRoute) => {
      return this.fireBaseUtils.add(valueObject, 'Transport/staffToRoute');
    },
    update: (key: string, valueObject: StaffToRoute) => {
      return this.fireBaseUtils.update(key, {...valueObject}, 'Transport/staffToRoute');
    },
    delete: (key: string) => {
      return this.fireBaseUtils.delete(key, 'Transport/staffToRoute');
    },
    deleteAll: () => {
      return this.fireBaseUtils.deleteAll('Transport/staffToRoute');
    },
  };

  public studentToRoute = {
    list: this.fireBaseUtils.getRelationDataList({listName: 'Transport/studentToRoute'}),
    add: (valueObject: StudentToRoute) => {
      return this.fireBaseUtils.add(valueObject, 'Transport/studentToRoute');
    },
    update: (key: string, valueObject: StudentToRoute) => {
      return this.fireBaseUtils.update(key, {...valueObject}, 'Transport/studentToRoute');
    },
    delete: (key: string) => {
      return this.fireBaseUtils.delete(key, 'Transport/studentToRoute');
    },
    deleteAll: () => {
      return this.fireBaseUtils.deleteAll('Transport/studentToRoute');
    },
  };


}

export class TransportMasterEntry {
  public readonly listName = 'Transport/transportMasterEntry';

  constructor(
    public routeTo = '',
    public status = false,
    public key = '',
  ) {
  }
}

export class Vehicle {
  key?: string;
  public readonly listName = 'Transport/vehicles';

  constructor(
    public name?: string,
    public number?: string,
    public deviceId?: string,
  ) {
  }
}

export class Fuel {
  key?: string;
  public readonly listName = 'Transport/fuel';

  constructor(
    public vehicle: Vehicle,
    public quantity: string,
    public ratePerLitre: number,
    public date: Date,
    public receiptNo: string,
    public remarks: string,
  ) {
  }
}

export class Reading {
  key?: string;
  public readonly listName = 'Transport/reading';
  vehicle: Vehicle;
  reading: number;
  date: Date;
  remarks: string;
}

export class Stoppage {
  key?: string;
  public readonly listName = 'Transport/stoppage';
  name: string;
  latitude: string;
  longitude: string;
}

export class Route {
  key?: string;
  public readonly listName = 'Transport/route';
  name: string;
  to: string;
  vehicle: Vehicle;
  driver: string;
  remarks: string;
}

export class StopToRoute {
  key?: string;
  public readonly listName = 'Transport/stopToRoute';
  route: Route;
  stoppage: Stoppage;
  time: string;
  type: StoppageType;
  driver: string;
  remarks: string;
}

export enum StoppageType {
  Source = 'Source',
  Destination = 'Destination',
  Stop = 'Stop',
}

export class StaffToRoute {
  key?: string;
  public readonly listName = 'Transport/staffToRoute';
  route: Route;
  stoppage: Stoppage;
  time: string;
  staff: string;
}

export class StudentToRoute {
  key?: string;
  public readonly listName = 'Transport/studentToRoute';
  route: Route;
  stoppage: Stoppage;
  time: string;
  student: string;
}

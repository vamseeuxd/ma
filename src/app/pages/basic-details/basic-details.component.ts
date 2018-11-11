import {Component} from '@angular/core';
import {Fuel, TransportMasterEntry, TransportSchema, Vehicle} from '../../db-schema/transport/TransportSchema';

@Component({
  selector: 'ngx-basic-details',
  templateUrl: './basic-details.component.html',
  styleUrls: ['./basic-details.component.scss'],
})
export class BasicDetailsComponent {
  public transportMasterEntry: TransportMasterEntry = new TransportMasterEntry();
  public transportMasterEntryList: TransportMasterEntry[] = [];

  constructor(public transportSchema: TransportSchema) {
    this.transportSchema.transportMasterEntry.list.subscribe(
      success => {
        this.transportMasterEntryList = success;
      },
    );
  }

  isDuplicate(value: TransportMasterEntry) {
    if (!value.routeTo || !this.transportMasterEntryList) {
      return false;
    }
    if (value.key) {
      return this.transportMasterEntryList.filter(option => {
        return (
          option.routeTo.toLowerCase().trim() === value.routeTo.toLowerCase().trim() &&
          option.key !== value.key
        );
      }).length > 0;
    } else {
      return this.transportMasterEntryList.filter(option => (option.routeTo.toLowerCase().trim() === value.routeTo.toLowerCase().trim())).length > 0;
    }
  }

  addTransportMasterEntry(value: any, sampleForm) {
    if (value.key) {
      this.transportSchema.transportMasterEntry.update(value.key, value).then(
        success => {
          alert(JSON.stringify(success));
          this.transportMasterEntry = new TransportMasterEntry();
          sampleForm.reset();
        },
        error => {
          alert(JSON.stringify(error));
        },
      );
    } else {
      this.transportSchema.transportMasterEntry.add(value).then(
        success => {
          alert(JSON.stringify(success));
          this.transportMasterEntry = new TransportMasterEntry();
          sampleForm.reset();
        },
        error => {
          alert(JSON.stringify(error));
        },
      );
    }
  }

  updateOption(option: TransportMasterEntry) {
    this.transportMasterEntry = JSON.parse(JSON.stringify(option));
  }
}

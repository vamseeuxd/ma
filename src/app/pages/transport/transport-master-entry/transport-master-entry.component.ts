import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';


@Component({
  selector: 'ngx-transport-master-entry',
  templateUrl: './transport-master-entry.component.html',
  styleUrls: ['./transport-master-entry.component.scss'],
})
export class TransportMasterEntryComponent implements OnInit {
  data = {};
  columnDefs = [
    {headerName: 'Route To', field: 'routeTo', width: 300,
      filter: 'agTextColumnFilter', floatingFilterComponentParams: {
        debounceMs: 500,
      }},
    {headerName: 'Status', field: 'isActive', width: 200, suppressFilter: true, suppressMenu: true, editable: true},
  ];

  rowData = [ ];

  private transportMasterEntryTable: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) {
    this.transportMasterEntryTable = this.db.list('transportMasterEntryList');
    this.transportMasterEntryTable.valueChanges().subscribe(success => {
      this.rowData = success;
    }, error => {
      this.rowData = [];
    });
  }

  ngOnInit() {
  }
  onTransportMasterEntryFormClick(transportMasterEntryForm) {
    if (this.data['isActive']) {
      this.data['isActive'] = 'Actvie';
    } else {
      this.data['isActive'] = 'In-Active';
    }
    this.transportMasterEntryTable.push(this.data).then(result => {
      this.data = {};
    });
  }

  onCellValueChanged(params) {
    this.transportMasterEntryTable.push(params.data).then(result => {
    });
  }

}

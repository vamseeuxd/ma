import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';

@Component({
  selector: 'ngx-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss'],
})
export class SessionComponent implements OnInit {

  showBusyIndicator = true;
  data = {};
  /*
  name="sessionName
  name="startDate
  name="endDate
  name="sessionType"
  */

  columnDefs = [
    {headerName: 'Session Name', field: 'sessionName'},
    {headerName: 'Start Date', field: 'startDate'},
    {headerName: 'End Date', field: 'endDate'},
    {headerName: 'Session Type', field: 'sessionType'},
  ];

  rowData = [];

  isInit = false;
  private sessionsTable: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) {
    this.sessionsTable = this.db.list('sessionsList');
    this.sessionsTable.valueChanges().subscribe(success => {
      this.rowData = success;
      if (!this.isInit) {
        this.showBusyIndicator = false;
      }
      this.isInit = true;
    }, error => {
      this.rowData = [];
      if (!this.isInit) {
        this.showBusyIndicator = false;
      }
      this.isInit = true;
    });
  }

  ngOnInit() {
  }

  onSessionSubmitFormClick(sessionForm) {
    this.showBusyIndicator = true;
    this.sessionsTable.push(this.data).then(result => {
      this.showBusyIndicator = false;
      // this.data = {};
    });
  }

  onAgGridReady(params: any) {
    params.api.sizeColumnsToFit();
    window.addEventListener('resize', function () {
      setTimeout(function () {
        params.api.sizeColumnsToFit();
      });
    });
  }
}

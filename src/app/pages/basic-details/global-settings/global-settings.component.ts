import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase, AngularFireList, AngularFireObject} from '@angular/fire/database';

@Component({
  selector: 'ngx-global-settings',
  templateUrl: './global-settings.component.html',
  styleUrls: ['./global-settings.component.scss'],
})
export class GlobalSettingsComponent implements OnInit {
  showBusyIndicator = false;
  timeZoneOptions = [];
  currencyOptions = [];
  noOfInitActivities = 3;
  noOfInitActivitiesCompleted = 0;
  private globalSettingsTable: AngularFireObject<any>;
  private listsOfTimeZones: AngularFireList<any>;
  private listsOfCurrency: AngularFireList<any>;

  data = {
    'printComputerGeneratedCopy': 'enabled',
    'startOfTheDay': '08:00',
    'endOfTheDay': '16:00',
    'currencyIcon': 'inr',
    'timeZone': 'IST',
  };

  constructor(private db: AngularFireDatabase) {
    // Lists of time zones
    this.showBusyIndicator = true;
    this.getGlobalSettings();
    this.getListsOfTimeZones();
    this.getListsOfCurrency();
  }

  getGlobalSettings() {
    this.globalSettingsTable = this.db.object('globalSettings');
    this.globalSettingsTable.valueChanges().subscribe(success => {
      if (success) {
        this.data = success;
        setTimeout(() => {
          this.noOfInitActivitiesCompleted++;
          this.showBusyIndicator = this.noOfInitActivitiesCompleted < this.noOfInitActivities;
        }, 2000);
      } else {
        this.noOfInitActivitiesCompleted++;
        this.showBusyIndicator = this.noOfInitActivitiesCompleted < this.noOfInitActivities;
      }
    }, error => {
      this.noOfInitActivitiesCompleted++;
      this.showBusyIndicator = this.noOfInitActivitiesCompleted < this.noOfInitActivities;
    });
  }

  getListsOfTimeZones() {
    this.listsOfTimeZones = this.db.list('listsOfTimeZones');
    this.listsOfTimeZones.valueChanges().subscribe(success => {
      this.noOfInitActivitiesCompleted++;
      this.timeZoneOptions = success;
      this.showBusyIndicator = this.noOfInitActivitiesCompleted < this.noOfInitActivities;
    }, error => {
      this.noOfInitActivitiesCompleted++;
      this.showBusyIndicator = this.noOfInitActivitiesCompleted < this.noOfInitActivities;
    });
  }

  getListsOfCurrency() {
    this.listsOfCurrency = this.db.list('listsOfCurrency');
    this.listsOfCurrency.valueChanges().subscribe(success => {
      this.noOfInitActivitiesCompleted++;
      this.currencyOptions = success;
      this.showBusyIndicator = this.noOfInitActivitiesCompleted < this.noOfInitActivities;
    }, error => {
      this.noOfInitActivitiesCompleted++;
      this.showBusyIndicator = this.noOfInitActivitiesCompleted < this.noOfInitActivities;
    });
  }

  ngOnInit() {
  }

  onSubmitButtonClick(basicInformationForm: any) {
    this.showBusyIndicator = true;
    this.globalSettingsTable.set(this.data).then(result => {
      this.showBusyIndicator = false;
    });
  }

}


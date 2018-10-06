import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase, AngularFireObject} from '@angular/fire/database';

@Component({
  selector: 'ngx-basic-information',
  templateUrl: './basic-information.component.html',
  styleUrls: ['./basic-information.component.scss'],
})
export class BasicInformationComponent implements OnInit {

  data = {};
  showBusyIndicator = false;
  private basicInformationTable: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) {
    this.showBusyIndicator = true;
    this.basicInformationTable = this.db.object('basicInformation');
    this.basicInformationTable.valueChanges().subscribe(success => {
      this.data = success;
      this.showBusyIndicator = false;
    }, error => {
      this.showBusyIndicator = false;
      // console.log('error', error);
    });
  }

  ngOnInit() {
  }

  onSubmitButtonClick(basicInformationForm: any) {
    this.showBusyIndicator = true;
    this.basicInformationTable.set(this.data).then(result => {
      this.showBusyIndicator = false;
    });
  }
}

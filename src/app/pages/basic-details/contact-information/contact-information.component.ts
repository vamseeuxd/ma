import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase, AngularFireObject} from '@angular/fire/database';

@Component({
  selector: 'ngx-contact-information',
  templateUrl: './contact-information.component.html',
  styleUrls: ['./contact-information.component.scss'],
})
export class ContactInformationComponent implements OnInit {
  showBusyIndicator = false;
  data = {};
  private contactInformationTable: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) {
    this.contactInformationTable = this.db.object('contactInformation');
    this.contactInformationTable.valueChanges().subscribe(success => {
      if (success) {
        this.data = success;
        setTimeout(() => {
          this.showBusyIndicator = false;
        }, 2000);
      } else {
        this.showBusyIndicator = false;
      }
    }, error => {
      this.showBusyIndicator = false;
    });
  }

  ngOnInit() {
  }

  onSubmitButtonClick() {
    this.showBusyIndicator = true;
    this.contactInformationTable.set(this.data).then(result => {
      this.showBusyIndicator = false;
    });
  }

}

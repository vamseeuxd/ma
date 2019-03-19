import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, AngularFireObject} from '@angular/fire/database';

@Component({
  selector: 'ngx-student-admission',
  templateUrl: './student-admission.component.html',
  styleUrls: ['./student-admission.component.scss'],
})
export class StudentAdmissionComponent implements OnInit {
  showBusyIndicator = false;

  data = {};
  private studentAdmissionTable: AngularFireObject<any>;
  optionsSeason: Array<any>;
  optionsGender: Array<any>;
  optionsClass: Array<any>;
  optionsSection: Array<any>;

  constructor(private db: AngularFireDatabase) {
    this.showBusyIndicator = true;
    this.studentAdmissionTable = this.db.object('studentAdmission');

    this.studentAdmissionTable.valueChanges().subscribe(success => {
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
    this.optionsSeason = [
      { id: '1', label: '2018' },
      { id: '2', label: '2019' },
      { id: '3', label: '2020' },
    ];

    this.optionsGender = [
      { id: '1', label: 'Male' },
      { id: '2', label: 'Female' },
      { id: '3', label: 'Trans Gender' },
    ];

    this.optionsClass = [
      { id: '1', label: 'Class 1' },
      { id: '2', label: 'Class 2' },
      { id: '3', label: 'Class 3' },
    ];

    this.optionsSection = [
      { id: '1', label: 'Section A' },
      { id: '2', label: 'Section B' },
      { id: '3', label: 'Section C' },
    ];
  }

  onSubmitButtonClick() {
    this.showBusyIndicator = true;
    this.studentAdmissionTable.set(this.data).then(result => {
      this.showBusyIndicator = false;
    });
  }

}

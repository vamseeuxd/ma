import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ngx-basic-information',
  templateUrl: './basic-information.component.html',
  styleUrls: ['./basic-information.component.scss'],
})
export class BasicInformationComponent implements OnInit {

  data = {};

  constructor() {
  }

  ngOnInit() {
  }

  onSubmitButtonClick(basicInformationForm: any) {
  }
}

import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ngx-global-settings',
  templateUrl: './global-settings.component.html',
  styleUrls: ['./global-settings.component.scss'],
})
export class GlobalSettingsComponent implements OnInit {

  data = {
    'printComputerGeneratedCopy': 'enabled',
    'startOfTheDay': '08:00',
    'endOfTheDay': '16:00',
    'currencyIcon': 'inr',
    'timeZone': 'ist',
  };

  constructor() {
  }

  ngOnInit() {
  }

  onSubmitButtonClick(basicInformationForm: any) {
  }

}

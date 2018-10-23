import {Component, OnInit} from '@angular/core';
import {BasicInformationSchemaService} from '../../db-schema/basic-information/basic-information-schema.service';

@Component({
  selector: 'ngx-basic-details',
  templateUrl: './basic-details.component.html',
  styleUrls: ['./basic-details.component.scss'],
})
export class BasicDetailsComponent {
  constructor(basicInformationSchemaService: BasicInformationSchemaService) {
    basicInformationSchemaService.subscribe(value => {
      console.log(value);
    });
  }
}

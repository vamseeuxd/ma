import {Component, OnInit} from '@angular/core';
import {BasicInformationSchemaService} from '../../db-schema/basic-information/basic-information-schema.service';
import {ContactInformationSchemaService} from "../../db-schema/contact-information/contact-information-schema.service";

@Component({
  selector: 'ngx-basic-details',
  templateUrl: './basic-details.component.html',
  styleUrls: ['./basic-details.component.scss'],
})
export class BasicDetailsComponent {
  constructor(
    basicInformationSchemaService: BasicInformationSchemaService,
    contactInformationSchemaService: ContactInformationSchemaService
  ) {
    basicInformationSchemaService.subscribe(value => {
      console.log(value);
    });

    contactInformationSchemaService.subscribe(value => {
      console.log(value);
    });
  }
}

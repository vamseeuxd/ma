import {Component} from '@angular/core';
import {SampleSchema} from '../../db-schema/sample-schema/sample-schema';

@Component({
  selector: 'ngx-basic-details',
  templateUrl: './basic-details.component.html',
  styleUrls: ['./basic-details.component.scss'],
})
export class BasicDetailsComponent {
  public selectedOrderCustomer = '';
  public selectedOrderItem = '';

  constructor(sampleSchema: SampleSchema) {
  }
}


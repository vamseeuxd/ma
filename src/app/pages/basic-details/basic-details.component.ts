import {Component} from '@angular/core';
import {ItemsService} from '../../db-schema/sample-schema/items/items.service';
import {CustomersService} from '../../db-schema/sample-schema/customers/customers.service';
import {OrdersService} from '../../db-schema/sample-schema/orders/orders.service';

@Component({
  selector: 'ngx-basic-details',
  templateUrl: './basic-details.component.html',
  styleUrls: ['./basic-details.component.scss'],
})
export class BasicDetailsComponent {
  public selectedOrderCustomer = '';
  public selectedOrderItem = '';

  constructor(
    public itemService: ItemsService,
    public customersService: CustomersService,
    public ordersService: OrdersService,
  ) {
  }
}


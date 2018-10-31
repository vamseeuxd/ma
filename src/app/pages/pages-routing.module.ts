import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {PagesComponent} from './pages.component';
import {BasicDetailsComponent} from './basic-details/basic-details.component';
import {TransportMasterEntryComponent} from './transport/transport-master-entry/transport-master-entry.component';
import {VehicleComponent} from './transport/vehicle/vehicle.component';
import {CreateStoppageComponent} from './transport/create-stoppage/create-stoppage.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'forms',
      loadChildren: './forms/forms.module#FormsModule',
    },
    {
      path: 'basic-details',
      component: BasicDetailsComponent,
    },
    {
      path: 'transport-master-entry',
      component: TransportMasterEntryComponent,
    },
    {
      path: 'transport-vehicle',
      component: VehicleComponent,
    },
    {
      path: 'transport-create-stoppage',
      component: CreateStoppageComponent,
    },
    {
      path: '',
      redirectTo: 'basic-details',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}

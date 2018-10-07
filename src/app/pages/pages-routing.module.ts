import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {PagesComponent} from './pages.component';
import {BasicDetailsComponent} from './basic-details/basic-details.component';
import {TransportMasterEntryComponent} from './transport/transport-master-entry/transport-master-entry.component';

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

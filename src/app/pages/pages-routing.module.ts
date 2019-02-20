import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {PagesComponent} from './pages.component';
import {BasicDetailsComponent} from './basic-details/basic-details.component';
import {StudentMasterEntryComponent} from './student-master-entry/student-master-entry.component';

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
      path: 'student-master-entry',
      component: StudentMasterEntryComponent,
    },
    {
      path: '',
      redirectTo: 'Student-Master-Entry',
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

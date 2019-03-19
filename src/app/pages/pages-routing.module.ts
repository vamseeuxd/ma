import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {PagesComponent} from './pages.component';
import {BasicDetailsComponent} from './basic-details/basic-details.component';
import {StudentAdmissionComponent} from './student/student-admission/student-admission.component';

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
      path: 'student-admission',
      component: StudentAdmissionComponent,
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

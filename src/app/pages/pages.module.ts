import {NgModule} from '@angular/core';

import {PagesComponent} from './pages.component';
import {PagesRoutingModule} from './pages-routing.module';
import {ThemeModule} from '../@theme/theme.module';
import {BasicDetailsComponent} from './basic-details/basic-details.component';
import {MaDynamicFormComponent} from '../components/ma-dynamic-form/ma-dynamic-form.component';
import {BasicInformationComponent} from './basic-details/basic-information/basic-information.component';
import {LogoAndSocialComponent} from './basic-details/logo-and-social/logo-and-social.component';
import {ContactInformationComponent} from './basic-details/contact-information/contact-information.component';
import {NgxMaskModule} from 'ngx-mask';
import {GlobalSettingsComponent} from './basic-details/global-settings/global-settings.component';
import {NbSpinnerModule, NbTabsetModule} from '@nebular/theme';
import {ImageCropperModule} from 'ngx-image-cropper';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { StudentMasterEntryComponent } from './student-master-entry/student-master-entry.component';
import {GenderManagerComponent} from './student-master-entry/gender-manager/gender-manager.component';
import {CategoryManagerComponent} from './student-master-entry/category-manager/category-manager.component';
import {BloodGroupManagerComponent} from './student-master-entry/blood-group-manager/blood-group-manager.component';
import {DocumentManagerComponent} from './student-master-entry/document-manager/document-manager.component';
import {CasteManagerComponent} from './student-master-entry/caste-manager/caste-manager.component';
import {ReasonManagerComponent} from './student-master-entry/reason-manager/reason-manager.component';

const PAGES_COMPONENTS = [
  PagesComponent,
  BasicDetailsComponent,
  MaDynamicFormComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    NgxMaskModule.forRoot(),
    ThemeModule,
    NbSpinnerModule,
    ImageCropperModule,
    NgbModule,
    NbTabsetModule,
  ],
  declarations: [
    ...PAGES_COMPONENTS,
    BasicInformationComponent,
    LogoAndSocialComponent,
    ContactInformationComponent,
    GlobalSettingsComponent,
    StudentMasterEntryComponent,
    GenderManagerComponent,
    CategoryManagerComponent,
    BloodGroupManagerComponent,
    DocumentManagerComponent,
    CasteManagerComponent,
    ReasonManagerComponent,
  ],
})
export class PagesModule {
}


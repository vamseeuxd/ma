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
import { GlobalSettingsComponent } from './basic-details/global-settings/global-settings.component';

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
  ],
  declarations: [
    ...PAGES_COMPONENTS,
    BasicInformationComponent,
    LogoAndSocialComponent,
    ContactInformationComponent,
    GlobalSettingsComponent,
  ],
})
export class PagesModule {
}


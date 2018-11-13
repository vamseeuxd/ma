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
import { TransportMasterEntryComponent } from './transport/transport-master-entry/transport-master-entry.component';
import { AgGridModule } from 'ag-grid-angular';
import {VehicleComponent} from './transport/vehicle/vehicle.component';
import { CreateStoppageComponent } from './transport/create-stoppage/create-stoppage.component';

import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';  // agm-direction

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
    AgGridModule.withComponents([]),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA9CbR0_S2dmvdlhC_veRTjfXtZ6qQC7jM',
      libraries: ['places'],
    }),
    AgmDirectionModule,     // agm-direction
  ],
  declarations: [
    ...PAGES_COMPONENTS,
    BasicInformationComponent,
    LogoAndSocialComponent,
    ContactInformationComponent,
    GlobalSettingsComponent,
    TransportMasterEntryComponent,
    VehicleComponent,
    CreateStoppageComponent,
  ],
})
export class PagesModule {
}


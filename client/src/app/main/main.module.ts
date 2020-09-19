import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MainRoutingModule} from './main-routing.module';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {HomeComponent} from './pages/home/home.component';
import {MainComponent} from './main.component';
import {EventsComponent} from './pages/events/events.component';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {SharedModule} from '../shared/shared.module';
import {HttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {MAT_MODULES} from './mat-modules';
import {PhotoComponent} from './pages/photo/photo.component';
import {EventDetailsComponent} from './pages/event-details/event-details.component';


export function HttpLoaderFactory(http: HttpClient): any {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [HeaderComponent, FooterComponent, HomeComponent, MainComponent, EventsComponent, PhotoComponent, EventDetailsComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    ...MAT_MODULES,
    SharedModule,
    TranslateModule.forRoot(
      {
        defaultLanguage: 'de',
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        }
      }
    )
  ]
})
export class MainModule {
}

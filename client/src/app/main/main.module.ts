import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main.component';
import { EventsComponent } from './events/events.component';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {SharedModule} from '../shared/shared.module';
import {HttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {MAT_MODULES} from './mat-modules';


export function HttpLoaderFactory(http: HttpClient): any {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [HeaderComponent, FooterComponent, HomeComponent, MainComponent, EventsComponent],
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
export class MainModule { }

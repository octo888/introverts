import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {MainComponent} from './main.component';
import {EventsComponent} from './pages/events/events.component';
import {PhotoComponent} from './pages/photo/photo.component';
import {EventDetailsComponent} from './pages/event-details/event-details.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'events',
        component: EventsComponent
      },
      {
        path: 'event/:id',
        component: EventDetailsComponent
      },
      {
        path: 'photo',
        component: PhotoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }

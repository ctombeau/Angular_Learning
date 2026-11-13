import { Routes } from '@angular/router';

import { MyCounterComponent } from './my-counter/my-counter.component';
import { CounterComponent } from './counter/counter.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },

  {
    path: 'home',
    component: HomeComponent
  },

  {
    path: 'search-input',
    component: SearchInputComponent
  },

  {
    path: '**',
    redirectTo: ''
  }

];
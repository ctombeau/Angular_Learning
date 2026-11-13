import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './ngrx/counter.reducer';
import { MyCounterComponent } from './my-counter/my-counter.component';
import {FormsModule} from '@angular/forms';
import { CounterComponent } from './counter/counter.component';

/*
@NgModule({
  declarations: [AppComponent,MyCounterComponent,CounterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ count: counterReducer }),
    FormsModule
  ],
  
  providers: [],
  bootstrap: [AppComponent],
})
*/
export class AppModule {}
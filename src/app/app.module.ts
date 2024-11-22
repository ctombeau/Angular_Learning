import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './ngrx/counter.reducer';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [AppComponent,MyCounterComponent],
  imports: [BrowserModule,AppRoutingModule, StoreModule.forRoot({ count: counterReducer })],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
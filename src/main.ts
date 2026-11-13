import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideStore } from '@ngrx/store';
import { counterReducer } from './app/ngrx/counter.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { appConfig } from './app/app.config';

/*
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
*/
/*
bootstrapApplication(AppComponent, {
  providers: [
    provideStore({ counter: counterReducer }),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: false, 
      name: 'NgRx Counter Devtools' 
    })
  ]
})
  .catch(err => console.error(err));
*/
bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));

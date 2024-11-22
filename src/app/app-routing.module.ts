import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MyCounterComponent } from './my-counter/my-counter.component';

const routes: Routes = [
   
  {path:'',component:MyCounterComponent},
  //{path: 'notfound', component: NotfoundComponent},
  {path:'**', redirectTo:'notfound'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

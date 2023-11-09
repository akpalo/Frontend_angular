import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KomponenttiComponent } from './komponentti/komponentti.component';
import { LaskinComponent } from './laskin/laskin.component';
import { FeedbackComponent } from './feedback/feedback.component';

const routes: Routes = [
  {path:'komponentti', component: KomponenttiComponent},
  {path:'laskin', component: LaskinComponent},
  {path:'feedback', component: FeedbackComponent},
  {path: '', redirectTo: '/feedback', pathMatch: 'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KomponenttiComponent } from './komponentti/komponentti.component';

const routes: Routes = [
  {path:'komponentti', component: KomponenttiComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KomponenttiComponent } from './komponentti/komponentti.component';
import { LaskinComponent } from './laskin/laskin.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FormComponent } from './form/form.component';


const routes: Routes = [
  {path: '', redirectTo: 'form', pathMatch: 'full'},
  {path:'komponentti', component: KomponenttiComponent},
  {path:'laskin', component: LaskinComponent},
  {path:'feedback', component: FeedbackComponent},
  {path:'form', component: FormComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



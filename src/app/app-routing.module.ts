import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KomponenttiComponent } from './komponentti/komponentti.component';
import { LaskinComponent } from './laskin/laskin.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FormComponent } from './form/form.component';
import { ReactiveformComponent} from './reactiveform/reactiveform.component';
import { CinemaComponent } from './cinema/cinema.component';
import { LoginComponent } from './login/login.component';
import { AdminviewComponent } from './adminview/adminview.component';
import { ReitinValvoja } from './reitinvalvoja.guard';
import { TenttiComponent } from './tentti/tentti.component';


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path:'komponentti', component: KomponenttiComponent},
  {path:'laskin', component: LaskinComponent},
  {path:'feedback', component: FeedbackComponent},
  {path:'form', component: FormComponent},
  {path:'reactiveform', component: ReactiveformComponent},
  {path:'cinema', component: CinemaComponent},
  {path:'adminview', component: AdminviewComponent, canActivate: [ReitinValvoja]},
  {path:'login', component: LoginComponent},
  {path:'tentti', component: TenttiComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



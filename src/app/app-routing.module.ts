import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {path: 'registro', component: RegisterComponent},
  {path: 'ingreso', component: LoginComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'portfolio/:id', component: PortfolioComponent},
  {path: '**', redirectTo: 'portfolio', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
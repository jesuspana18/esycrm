import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppLayoutComponent} from "./layout/app.layout.component";
import {HomeComponent} from "./layout/components/home/home.component";
import {LandingComponent} from "./layout/components/landing/landing.component";

const routes: Routes = [
  {
    path: '', component: LandingComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

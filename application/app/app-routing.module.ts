import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GuidesComponent } from './guides/guides.component';
import { FlightsComponent } from './flights/flights.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path: "", redirectTo: 'home', pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {path: "guides", component: GuidesComponent},
  {path: "flights", component: FlightsComponent},
  {path: "about", component: AboutComponent},
  {path: "contact", component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

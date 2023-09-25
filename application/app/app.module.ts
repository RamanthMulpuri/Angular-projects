import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { GuidesComponent } from './guides/guides.component';
import { FlightsComponent } from './flights/flights.component';
import { AboutComponent } from './about/about.component';
import { MemoryComponent } from './memory/memory.component';
import { MainComponent } from './main/main.component';
import { AccslidersComponent } from './accsliders/accsliders.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ContactComponent,
    GuidesComponent,
    FlightsComponent,
    AboutComponent,
    MemoryComponent,
    MainComponent,
    AccslidersComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

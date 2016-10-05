import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {AppComponent} from './app.component';
import { routing } from './app.routing';
import { LandingPageComponent} from './landing-page/landing-page.component';
import { BookingBoxComponent} from './landing-page/booking-box.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, routing],
  declarations: [AppComponent, LandingPageComponent, BookingBoxComponent],
  bootstrap: [AppComponent]
})

export class AppModule {}

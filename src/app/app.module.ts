import { NgModule} from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppComponent} from './app.component';
import { routing } from './app.routing';

// app main components
import { NavbarComponent} from './navbar/navbar.component';
import { LandingPageComponent} from './landing-page/landing-page.component';

// landing page sub components
import { BookingBoxComponent} from './landing-page/booking-box.component';
import { BannerComponent} from './landing-page/banner.component';
import { AdCarouselBoxComponent} from './landing-page/ad-carousel-box.component';
import { MyDatePickerModule } from 'mydatepicker/src/my-date-picker/my-date-picker.module';
import { UpdatesComponent } from './landing-page/updates.component'

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, MyDatePickerModule, routing],
  declarations: [
    AppComponent, NavbarComponent,
    LandingPageComponent,
      BookingBoxComponent, AdCarouselBoxComponent, BannerComponent, UpdatesComponent
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}

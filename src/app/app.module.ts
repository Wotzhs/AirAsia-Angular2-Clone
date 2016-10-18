import { NgModule} from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppComponent} from './app.component';
import { routing } from './app.routing';

// app main components
import { NavbarComponent} from './navbar/navbar.component';
import { LandingPageComponent} from './landing-page/landing-page.component';
import { FooterComponent} from './footer/footer.component';

// navbar sub components
import { WebCheckInComponent} from './navbar/web-check-in/web-check-in.component';
import { TravelInfoComponent} from './navbar/travel-information/travel-info.component';
import { BusinessGovernmentComponent} from './navbar/business-government/business-government.component';
import { LoginComponent} from './navbar/login/login.component';

// landing page sub components
import { BookingBoxComponent} from './landing-page/booking-box/booking-box.component';
    // Booking Box Sub components
    import {BookingBoxFlightTabComponent} from './landing-page/booking-box/booking-box-flight-tab.component';
    import {BookingBoxHotelTabComponent} from './landing-page/booking-box/booking-box-hotel-tab.component';
    import {BookingBoxFlightHotelTabComponent} from './landing-page/booking-box/booking-box-flight-hotel-tab.component';
    import {BookingBoxCarTabComponent} from './landing-page/booking-box/booking-box-car-tab.component';

import { BannerComponent} from './landing-page/banner/banner.component';
import { AdCarouselBoxComponent} from './landing-page/ad-carousel/ad-carousel-box.component';
import { MyDatePickerModule } from 'mydatepicker/src/my-date-picker/my-date-picker.module';
import { UpdatesComponent } from './landing-page/updates/updates.component'

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, MyDatePickerModule, routing],
  declarations: [
    AppComponent,
        NavbarComponent,
            WebCheckInComponent, TravelInfoComponent, BusinessGovernmentComponent, LoginComponent,
        FooterComponent,
        LandingPageComponent,
            BookingBoxComponent,
                BookingBoxFlightTabComponent,BookingBoxHotelTabComponent, BookingBoxFlightHotelTabComponent, BookingBoxCarTabComponent,
            AdCarouselBoxComponent, BannerComponent, UpdatesComponent
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}

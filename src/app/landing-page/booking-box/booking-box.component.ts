import {Component, OnChanges, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BookingTypeTabs} from './booking-box';
import {BookingTypeTabsService} from './booking-box.services';

@Component({
  selector: 'booking-box',
  templateUrl: './booking-box.component.html',
  styleUrls: ['./booking-box.component.css'],
  providers: [BookingTypeTabsService]
})

export class BookingBoxComponent implements OnInit {

  selectedTab: BookingTypeTabs;
  bookingTypeTabs: BookingTypeTabs[];

  constructor(private bookingTypeTabsService: BookingTypeTabsService){}

  ngOnInit(){
    this.getBookingTypeTabs();
    (<any>$('.ui.radio.checkbox')).checkbox();
  }

  getBookingTypeTabs= (): void=>{
    this.bookingTypeTabsService.getBookingTypeTabs().then(bookingTypeTabs => this.bookingTypeTabs = bookingTypeTabs)
  }

}

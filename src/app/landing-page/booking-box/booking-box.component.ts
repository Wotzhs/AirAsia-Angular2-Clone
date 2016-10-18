import {Component, ComponentFactoryResolver, ViewChild, ViewContainerRef, OnInit} from '@angular/core';
import {BookingTypeTabs} from './booking-box';
import {BookingTypeTabsService} from './booking-box.services';
import {BookingBoxFlightTabComponent} from './booking-box-flight-tab.component';
import {BookingBoxHotelTabComponent} from './booking-box-hotel-tab.component';
import {BookingBoxFlightHotelTabComponent} from './booking-box-flight-hotel-tab.component';
import {BookingBoxCarTabComponent} from './booking-box-car-tab.component';

@Component({
  selector: 'booking-box',
  templateUrl: './booking-box.component.html',
  styleUrls: ['./booking-box.component.css'],
  providers: [BookingTypeTabsService],
  entryComponents: [
    BookingBoxFlightTabComponent, BookingBoxHotelTabComponent, BookingBoxFlightHotelTabComponent, BookingBoxCarTabComponent
  ]
})

export class BookingBoxComponent implements OnInit {

  selectedTab: BookingTypeTabs;
  bookingTypeTabs: BookingTypeTabs[];

  @ViewChild('tabAnchor', {read: ViewContainerRef}) tabAnchor:ViewContainerRef;

  constructor(
    private bookingTypeTabsService: BookingTypeTabsService,
    private componentFactoryResolver: ComponentFactoryResolver
  ){}

  selectComponent = (selection:string)=>{
    let component:any;
    switch(selection){
      case 'flight':
        component = BookingBoxFlightTabComponent;
        break;
      case 'hotel':
        component = BookingBoxHotelTabComponent;
        break;
      case 'flighthotel':
        component = BookingBoxFlightHotelTabComponent;
        break;
      case 'car':
        component = BookingBoxCarTabComponent;
        break;
    }
    return component;
  }

  openChildComponent = (component:any)=>{
    this.tabAnchor.clear();
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(component)
    let componentRef = this.tabAnchor.createComponent(componentFactory);
  }

  ngOnInit(){
    this.getBookingTypeTabs();
    // this.openChildComponent(BookingBoxFlightTabComponent);

  }

  getBookingTypeTabs= (): void=>{
    this.bookingTypeTabsService.getBookingTypeTabs().then(bookingTypeTabs => this.bookingTypeTabs = bookingTypeTabs)
  }



}

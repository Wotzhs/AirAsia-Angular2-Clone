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

  initTab: string;
  bookingTypeTabs: BookingTypeTabs[];

  @ViewChild('childComponent', {read: ViewContainerRef}) childComponent:ViewContainerRef;

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
    this.childComponent.clear();
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(component)
    let componentRef = this.childComponent.createComponent(componentFactory);
  }

  ngOnInit(){
    this.getBookingTypeTabs();
    this.initTab = 'flight';
    this.openChildComponent(this.selectComponent(this.initTab));
  }

  getBookingTypeTabs= (): void=>{
    this.bookingTypeTabsService.getBookingTypeTabs().then(bookingTypeTabs => this.bookingTypeTabs = bookingTypeTabs)
  }
}

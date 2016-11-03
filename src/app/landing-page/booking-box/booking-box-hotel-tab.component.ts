import {Component, OnInit} from '@angular/core'
import {DestinationsService} from './booking-box.services';
import {Destinations} from './booking-box';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  templateUrl: './booking-box-hotel-tab.component.html',
  styleUrls: ['./booking-box-hotel-tab.component.css'],
  providers: [DestinationsService]
})

export class BookingBoxHotelTabComponent {

  destinations: Destinations[];
  searchForm : FormGroup;
  endDateOptions:Object;
  startDateOptions: Object;

  constructor(
    private destinationsService : DestinationsService,
    private formBuilder : FormBuilder
  ){}

  ngOnInit(){
    this.destinationsService.getDestinations().then(destinations => this.destinations = destinations)
    this.searchForm = this.formBuilder.group({
      destination: ['Destination', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      rooms: 1,
      adult: 1,
      children: 0,
      infant: 0
    })
    this.startDateOptions = {
    	dateFormat: "dd/mm/yyyy",
    	disableUntil: {year: new Date().getFullYear() , month: new Date().getMonth()+1 , day: new Date().getDate()-1},
    }
    this.endDateOptions = {
      dateFormat: "dd/mm/yyyy",
      disableUntil: {year: new Date().getFullYear() , month: new Date().getMonth()+1 , day: new Date().getDate()-1}
    }
  }

  updateStartDate(event:any){
    this.searchForm.patchValue({startDate: event.formatted})

    // update disabled date up to the selected date in start date datepicker
    return this.endDateOptions = {
    	dateFormat: "dd/mm/yyyy",
    	disableUntil: event.date
    }
  }

  updateEndDate(event:any){
    this.searchForm.patchValue({endDate: event.formatted})

    // update the disabled date beyond the selected date in end date datepicker for the start date datepicker
    return this.startDateOptions = {
    	dateFormat: "dd/mm/yyyy",
    	disableUntil: {year: new Date().getFullYear() , month: new Date().getMonth()+1 , day: new Date().getDate()-1},
      disableSince: event.date
    }
  }

  serializeData(event:any){
    event.preventDefault();
    const baseUrl= 'https://www.airasiago.com.my/Hotel-Search?';
    const destination = this.searchForm.value.destination;
    const startDate = this.searchForm.value.startDate;
    const endDate = this.searchForm.value.endDate;
    const numberOfRooms = this.searchForm.value.rooms;
    const numberOfAdult = this.searchForm.value.adult;
    const numberOfChildren = this.searchForm.value.children;
    const numberOfInfant = this.searchForm.value.infant;
    const requestUrl = baseUrl+destination+startDate+endDate+numberOfRooms+numberOfAdult+numberOfChildren+numberOfInfant
    return requestUrl
  }

}

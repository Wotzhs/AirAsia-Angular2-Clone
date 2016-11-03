import {Component, OnInit} from '@angular/core'
import {DestinationsService} from './booking-box.services';
import {Destinations} from './booking-box';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpService} from '../../app.service';
import {Router} from '@angular/router';

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
    private formBuilder : FormBuilder,
    private httpService: HttpService,
    private router: Router
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

  multiplyString(parameterName:string, item:number[], times:number){
  	let mapped:string[] = [];
    if (parameterName === '&children='){
        for (let i = 0; i < item.reduce((a,b)=>{return a+b}); i++){ // children + infant multiplier
          for (let j = 0; j < times; j++){ // room multiplier
            mapped.push(j+1+'_'+ (i < item[0] ? 2 : 1))
          }
        }
    } else {
      for (let i = 0; i < item[0]; i ++){
        mapped.push(item[0].toString())
      }
    }
    return parameterName+mapped.sort().join(',')
  }

  serializeData(event:any){
    event.preventDefault();
    const baseUrl= 'https://www.airasiago.com.my/Hotel-Search?';
    const destination = 'destination='+this.searchForm.value.destination;
    const startDate = '&startDate='+this.searchForm.value.startDate;
    const endDate = '&endDate='+this.searchForm.value.endDate;
    const numberOfRooms = this.searchForm.value.rooms;
    const numberOfAdult =  this.searchForm.value.adult;
    const numberOfChildren = eval(this.searchForm.value.children);
    const numberOfInfant = eval(this.searchForm.value.infant);
    const requestUrl = baseUrl+destination+startDate+endDate+this.multiplyString('&adults=',[numberOfAdult],numberOfRooms)+this.multiplyString('&children=', [numberOfChildren,numberOfInfant], numberOfRooms)
    return requestUrl
  }

  setHttpGetData = (data:string)=>{
    this.httpService.setHttpGetData(data);
    this.router.navigate(['a']);
  }

}

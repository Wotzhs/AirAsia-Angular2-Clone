import {Component, OnInit} from '@angular/core';
import {FlightTypes, BookingChoices, Currencies} from './booking-box';
import {FlightTypesService, BookingChoicesService, CurrenciesService} from './booking-box.services';
import {FLIGHTTYPES, BOOKINGCHOICES, CURRENCIES} from '../../mocks/booking-box.mock';

@Component({
  templateUrl: './booking-box-flight-tab.component.html',
  styleUrls: ['./booking-box-flight-tab.component.css'],
  providers: [FlightTypesService, BookingChoicesService, CurrenciesService]
})

export class BookingBoxFlightTabComponent {

  // declaration of types
  flightTypes: FlightTypes[];
  bookingChoices: BookingChoices[];
  currencies: Currencies[];
  selectedFlightType: string;
  selectedBookingChoice: string;
  selectedCurrency: string;
  childrenInfant: boolean;

  constructor(
    private flightTypesService: FlightTypesService,
    private bookingChoicesService: BookingChoicesService,
    private currenciesService: CurrenciesService
  ){}

  ngOnInit(){
    this.getFlightTypes();
    this.getBookingChoices();
    this.getCurrencies();
    this.selectedFlightType = "return";
    this.childrenInfant = false;
    this.selectedBookingChoice = "date";
    this.selectedCurrency = "";
  }

  getFlightTypes = ():void =>{
    this.flightTypesService.getFlightTypes().then(flightTypes => this.flightTypes = flightTypes)
  }

  selectFlightType = (flightType:any)=>{
    if(flightType !== this.selectedFlightType){
      this.selectedFlightType = flightType;
    }
  }

  selectCurrency = (text:string, code:string)=>{
    this.selectedCurrency = code + " - " + text
  }

  getBookingChoices = (): void=>{
    this.bookingChoicesService.getBookingChoices().then(bookingChoices => this.bookingChoices = bookingChoices)
  }

  getCurrencies = ():void =>{
    this.currenciesService.getCurrencies().then(currencies => this.currencies = currencies)
  }

  // date picker initialization
  myDatePickerOptions = {
  	dateFormat: "dd/mm/yyyy",
  	fistDayOfWeek: 'mo',
  	sunHighlight: true,
  	height:'34px',
  	inline: false,
  	disableUntil: {year: new Date().getFullYear() , month: new Date().getMonth()+1 , day: new Date().getDate()-1}
  }
  // date picker to set start date
  updateDepartDate = (event: any) =>{
    console.log('depart date:', event.date, ' - formatted', event.formatted, ' - epoc timestamp', event.epoc);
  }
  // date picker to set start date
  updateReturnDate = (event: any)=>{
    console.log('return date: ', event.date, ' - formatted', event.formatted, ' - epoc timestamp', event.epoc);
  }
}

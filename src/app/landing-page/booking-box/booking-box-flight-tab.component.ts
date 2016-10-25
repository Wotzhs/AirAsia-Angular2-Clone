import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HttpService} from '../../app.service';
import {FlightTypes, BookingChoices, Currencies, Destinations} from './booking-box';
import {FlightTypesService, BookingChoicesService, CurrenciesService, DestinationsService} from './booking-box.services';
import {FLIGHTTYPES, BOOKINGCHOICES, CURRENCIES, DESTINATIONS} from '../../mocks/booking-box.mock';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  templateUrl: './booking-box-flight-tab.component.html',
  styleUrls: ['./booking-box-flight-tab.component.css'],
  providers: [FlightTypesService, BookingChoicesService, CurrenciesService, DestinationsService]
})

export class BookingBoxFlightTabComponent {

  // declaration of types
  flightTypes: FlightTypes[];
  bookingChoices: BookingChoices[];
  currencies: Currencies[];
  destinations: Destinations[];
  selectedFlightType: string;
  selectedBookingChoice: string;
  selectedCurrency: string;
  childrenInfant: boolean;
  searchForm: FormGroup;

  constructor(
    private flightTypesService: FlightTypesService,
    private bookingChoicesService: BookingChoicesService,
    private currenciesService: CurrenciesService,
    private destinationsService: DestinationsService,
    private httpService: HttpService,
    private router: Router,
    private formBuilder: FormBuilder,
  ){}

  ngOnInit(){
    this.getFlightTypes();
    this.getBookingChoices();
    this.getCurrencies();
    this.getDestinations();
    this.selectedFlightType = "return";
    this.childrenInfant = false;
    this.selectedBookingChoice = "date";
    this.selectedCurrency = "";
    this.searchForm = this.formBuilder.group({
      origin: ['Origin', Validators.required],
      destination: ['Destination', Validators.required],
      depart_date: ['', Validators.required],
      return_date: ['', ],
      currency: ['', Validators.required],
      adult: 1,
      children: 0,
      infant: 0,
      booking_choice: ['date', Validators.required]
    })

  }

  getFlightTypes = ():void =>{
    this.flightTypesService.getFlightTypes().then(flightTypes => this.flightTypes = flightTypes);
  }

  selectFlightType = (flightType:any)=>{
    if(flightType !== this.selectedFlightType){
      this.selectedFlightType = flightType;
    }
  }

  setCurrency = (code:string)=>{
    this.currenciesService.getCurrency(code).then(currency => this.selectedCurrency = currency);
    this.searchForm.patchValue({currency: code})
    alert(JSON.stringify(this.searchForm.value))
  }

  setOriginAndDefaultCurrency = (array:string)=>{
    // update for origin value
    let origin = array.split(',')[0];
    this.searchForm.patchValue({origin: origin});

    // trigger currency display in form
    let defaultCurrency = array.split(',')[1]
    this.currenciesService.getCurrency(defaultCurrency).then(currency => this.selectedCurrency = currency);
    this.searchForm.patchValue({currency: defaultCurrency})
  }

  getBookingChoices = ():void=>{
    this.bookingChoicesService.getBookingChoices().then(bookingChoices => this.bookingChoices = bookingChoices);
  }

  getCurrencies = ():void =>{
    this.currenciesService.getCurrencies().then(currencies => this.currencies = currencies);
  }

  getDestinations = ():void=>{
    this.destinationsService.getDestinations().then(destinations => this.destinations = destinations);
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
    this.searchForm.patchValue({depart_date: event.date.year+'/'+event.date.month+'/'+event.date.day});
  }
  // date picker to set start date
  updateReturnDate = (event: any)=>{
    this.searchForm.patchValue({return_date: event.date.year+'/'+event.date.month+'/'+event.date.day});
  }

  setHttpGetData = (data:string)=>{
    this.httpService.setHttpGetData(data);
    this.router.navigate(['a']);
  }

  serializeData = (event:any)=>{
    event.preventDefault();
    // let data = JSON.stringify(this.searchForm.value)
    // alert(data.replace(/:/g, '=').replace(/,/g, '&'))
    const baseUrl = 'https://booking.airasia.com/Flight/Select?';
    const origin = 'o1='+this.searchForm.value.origin;
    const destination = '&d1='+this.searchForm.value.destination;
    const culture = '&culture=en-GB';
    const currency = '&cc='+this.searchForm.value.currency;
    const depart_date = "&dd1="+this.searchForm.value.depart_date;
    const return_date = "&dd2="+this.searchForm.value.return_date;
    const adult = "&ADL="+this.searchForm.value.adult;
    const children = "&CH="+this.searchForm.value.children;
    const infant = "&inl="+this.searchForm.value.infant;
    const requestUrl = baseUrl+origin+destination+culture+currency+depart_date+adult+children+infant
    if (this.selectedFlightType !== 'return'){
      const serializedData = requestUrl+"&s=true&mon=true&c=false"
    }
    const serializedData = requestUrl+return_date+"&s=true&mon=true&c=false"
    return serializedData
  }
}

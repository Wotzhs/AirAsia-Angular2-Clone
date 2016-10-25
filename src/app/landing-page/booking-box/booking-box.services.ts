import {Injectable} from '@angular/core';
import {BookingChoices, BookingTypeTabs, Currencies, Destinations, FlightTypes} from './booking-box';
import {BOOKINGCHOICES, BOOKINGTYPETABS, CURRENCIES, DESTINATIONS, FLIGHTTYPES} from '../../mocks/booking-box.mock';

@Injectable()
export class BookingChoicesService{
  getBookingChoices(): Promise<BookingChoices[]>{
    return Promise.resolve(BOOKINGCHOICES)
  }
}

export class BookingTypeTabsService{
  getBookingTypeTabs(): Promise<BookingTypeTabs[]>{
    return Promise.resolve(BOOKINGTYPETABS)
  }
}

export class CurrenciesService{
  getCurrencies(): Promise<Currencies[]>{
    return Promise.resolve(CURRENCIES)
  }
  getCurrency(code:string): Promise<string>{
    var selectedCurrency:string
    CURRENCIES.filter((currency)=>{
      if (currency.code === code){
        selectedCurrency = currency.text +' - ' + currency.code
      }
    })
    return Promise.resolve(selectedCurrency)
  }
}

export class DestinationsService{
  getDestinations(): Promise<Destinations[]>{
    return Promise.resolve(DESTINATIONS)
  }
  
}

export class FlightTypesService{
  getFlightTypes(): Promise<FlightTypes[]>{
    return Promise.resolve(FLIGHTTYPES)
  }
}

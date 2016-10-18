import {BookingChoices, BookingTypeTabs, Currencies, Destinations, FlightTypes} from '../landing-page/booking-box/booking-box';

export const CURRENCIES: Currencies[]= [
  { id: 1, code: "AUD", text: "Australian Dollar" },
  { id: 2, code: "MYR", text: "Malaysian Ringgit" },
  { id: 3, code: "SGD", text: "Singapore Dollar" },
  { id: 4, code: "USD", text: "US Dollar" },
  { id: 5, code: "GBP", text: "Pound Sterling" },
]

export const DESTINATIONS: Destinations[] = [
  { id: 1, code: "KUL", text: "Kuala Lumpur" },
  { id: 2, code: "BKI", text: "Kota Kinabalu" },
  { id: 3, code: "SDK", text: "Sandakan" },
  { id: 4, code: "MYY", text: "Miri" },
  { id: 5, code: "KCH", text: "Kuching" }
]

export const BOOKINGCHOICES: BookingChoices[] = [
  { id: 1, type: "date", text: "I must travel on these dates" },
  { id: 2, type: "price", text: "I just want the cheapest flight"}
]

export const FLIGHTTYPES: FlightTypes[] = [
  { id: 1 , type: "return", text: "Return" },
  { id: 2 , type: "oneway", text: "One-way" },
  { id: 3 , type: "multicity", text: "Multi-City" }
]

export const BOOKINGTYPETABS: BookingTypeTabs[] = [
  { id: 1, type: "Flight", text: "Flight"},
  { id: 2, type: "Hotel", text: "Hotel"},
  { id: 3, type: "FlightHotel", text: "Flight + Hotel"},
  { id: 4, type: "Car", text: "Car"}
]

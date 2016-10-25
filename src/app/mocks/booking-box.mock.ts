import {BookingChoices, BookingTypeTabs, Currencies, Destinations, FlightTypes} from '../landing-page/booking-box/booking-box';

export const CURRENCIES: Currencies[]= [
  { id: 1, code: "AUD", text: "Australian Dollar" },
  { id: 2, code: "MYR", text: "Malaysian Ringgit" },
  { id: 3, code: "SGD", text: "Singapore Dollar" },
  { id: 4, code: "USD", text: "US Dollar" },
  { id: 5, code: "GBP", text: "Pound Sterling" },
]

export const DESTINATIONS: Destinations[] = [
  { id: 1, code: "KUL", text: "Kuala Lumpur", defaultCurrency: "MYR" },
  { id: 2, code: "BKI", text: "Kota Kinabalu", defaultCurrency: "MYR"},
  { id: 3, code: "SDK", text: "Sandakan", defaultCurrency: "MYR"},
  { id: 4, code: "MYY", text: "Miri", defaultCurrency: "MYR" },
  { id: 5, code: "KCH", text: "Kuching", defaultCurrency: "MYR" }
]

export const BOOKINGCHOICES: BookingChoices[] = [
  { id: 1, code: "date", text: "I must travel on these dates" },
  { id: 2, code: "price", text: "I just want the cheapest flight"}
]

export const FLIGHTTYPES: FlightTypes[] = [
  { id: 1 , code: "return", text: "Return" },
  { id: 2 , code: "oneway", text: "One-way" },
  { id: 3 , code: "multicity", text: "Multi-City" }
]

export const BOOKINGTYPETABS: BookingTypeTabs[] = [
  { id: 1, code: "flight", text: "Flight"},
  { id: 2, code: "hotel", text: "Hotel"},
  { id: 3, code: "flighthotel", text: "Flight + Hotel"},
  { id: 4, code: "car", text: "Car"}
]

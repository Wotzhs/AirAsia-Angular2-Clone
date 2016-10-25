class BaseClass{
  id: number;
  code: string;
  text: string;
}

export class BookingChoices extends BaseClass {}

export class BookingTypeTabs extends BaseClass {}

export class Currencies extends BaseClass {}

export class Destinations extends BaseClass {
  defaultCurrency: string;
}

export class FlightTypes extends BaseClass {}

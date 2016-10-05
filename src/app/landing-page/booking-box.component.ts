import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'booking-box',
  templateUrl: './booking-box.component.html',
  styleUrls: ['./booking-box.component.css']
})

export class BookingBoxComponent implements OnInit {
  bookingBox: FormGroup;
  constructor(private formbuilder: FormBuilder){}

  public currencies = [
    {value: "AUD", display:"Australian Dollar"},
    {value: "MYR", display:"Malaysian Ringgit"},
    {value: "SGD", display:"Singapore Dollar"},
    {value: "USD", display:"US Dollar"},
    {value: "GBP", display:"Pound Sterling"},
  ]

  public origins = [
    {value: "kualalumpur", display:"Kuala Lumpur"},
    {value: "kotakinabalu", display:"Kota Kinabalu"},
    {value: "sandakan", display:"Sandakan"},
    {value: "miri", display:"Miri"},
    {value: "kuching", display:"Kuching"}
  ]

  public destinations = [
    {value: "kualalumpur", display:"Kuala Lumpur"},
    {value: "kotakinabalu", display:"Kota Kinabalu"},
    {value: "sandakan", display:"Sandakan"},
    {value: "miri", display:"Miri"},
    {value: "kuching", display:"Kuching"}
  ]

  public flightTypes = [
    {value: "return", display:"Return"},
    {value: "oneway", display:"One-way"},
    {value: "multicity", display:"Multi-City"}
  ]

  public bookingTypes = [
    { value: "Flight", display: "Flight"},
    { value: "Hotel", display: "Hotel"},
    { value: "Flight + Hotel", display: "Flight + Hotel"},
    { value: "Car", display: "Car"}
  ]

  ngOnInit(){
    this.bookingBox = this.formbuilder.group({
      bookingType: ["", Validators.required],
      flightType: ["", Validators.required],
      origin: ["", Validators.required],
      destination: ["", Validators.required],
      currency: ["", Validators.required],
      adult: ["", Validators.required],
      children: ["", Validators.required],
      infant: ["", Validators.required],
      travel_priority: ["", Validators.required],
      depart_date: ["", Validators.required],
      return_date: ["", Validators.required],
    })
  }

  submit(origin: String, destination: boolean){
    alert(JSON.stringify(origin) + destination)
  }
}

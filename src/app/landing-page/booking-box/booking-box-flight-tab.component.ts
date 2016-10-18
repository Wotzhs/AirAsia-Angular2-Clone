import {Component} from '@angular/core';

@Component({
  templateUrl: './booking-box-flight-tab.component.html',
  styleUrls: ['./booking-box-flight-tab.component.css']
})

export class BookingBoxFlightTabComponent {

  myDatePickerOptions = {
  	dateFormat: "dd/mm/yyyy",
  	fistDayOfWeek: 'mo',
  	sunHighlight: true,
  	height:'34px',
  	inline: false,
  	disableUntil: {year: new Date().getFullYear() , month: new Date().getMonth()+1 , day: new Date().getDate()-1}
  }

  updateDepartDate(event: any){
    console.log('depart date:', event.date, ' - formatted', event.formatted, ' - epoc timestamp', event.epoc);
  }

  updateReturnDate(event: any){
    console.log('return date: ', event.date, ' - formatted', event.formatted, ' - epoc timestamp', event.epoc);
  }

  setActive = (e:any)=>{
    (<any>document.querySelectorAll(".ui.circular.red.label")).forEach((i:any)=>{i.classList.remove("red")});
    e.srcElement.classList.add("red");
    // alert($.parseHTML(e.srcElement))
    alert(JSON.stringify(e.target))
    // alert(JSON.stringify(e.returnValue))
    // alert(JSON.stringify(e.srcElement))
  }
}

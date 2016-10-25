import {Component, OnInit} from '@angular/core'
import {HttpService} from '../app.service';

@Component({
  templateUrl: './select-flight-page.component.html'
})

export class SelectFlightPageComponent {
  data: string;
  constructor(private httpService: HttpService){}
  ngOnInit(){
    this.data = this.httpService.httpGetData
  }
}

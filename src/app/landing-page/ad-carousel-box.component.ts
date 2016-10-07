import {Component, OnInit} from '@angular/core';


require('swipe-js/swipe.js');

@Component({
  selector: 'ad-carousel-box',
  templateUrl: './ad-carousel-box.component.html',
  styleUrls: ['./ad-carousel-box.component.css']
})


export class AdCarouselBoxComponent implements OnInit {



 ngOnInit(){
  //  (<any>window).swipe = Swipe(document.getElementById('slider'));
 }
}

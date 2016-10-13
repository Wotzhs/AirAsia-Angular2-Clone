import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ad-carousel-box',
  templateUrl: './ad-carousel-box.component.html',
  styleUrls: ['./ad-carousel-box.component.css']
})

export class AdCarouselBoxComponent implements OnInit {
 ngOnInit(){
  (<any>$('.owl-carousel')).owlCarousel({
    loop:true,
    margin:10,
    items: 1,
    nav: true,
  });
 }
}

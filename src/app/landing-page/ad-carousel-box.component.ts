import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ad-carousel-box',
  templateUrl: './ad-carousel-box.component.html',
  styleUrls: ['./ad-carousel-box.component.css']
})

export class AdCarouselBoxComponent implements OnInit {

  carousel1: string;
  carousel2: string;
  carousel3: string;
  carousel4: string;

  constructor(){
    this.carousel1 = "../src/assets/img/carousel1.jpg";
    this.carousel2 = "../src/assets/img/carousel2.png";
    this.carousel3 = "../src/assets/img/carousel3.jpg";
    this.carousel4 = "../src/assets/img/carousel4.jpg";
  }

  ngOnInit(){
    (<any>$('.owl-carousel')).owlCarousel({
      loop:true,
      margin:10,
      items: 1,
      nav: true,
    });
  }
}

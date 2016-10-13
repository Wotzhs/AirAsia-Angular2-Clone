import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ad-carousel-box',
  templateUrl: './ad-carousel-box.component.html',

  // styleUrls doesn't work because the carousel contents are marked up by the carousel plugin
  styleUrls: ['./ad-carousel-box.component.css']
})

export class AdCarouselBoxComponent implements OnInit {

  // to be refactored to carousel.property.ts
  carousel1: string;
  carousel2: string;
  carousel3: string;
  carousel4: string;

  // to be refactored to and load from carousel.service.ts
  constructor(){
    this.carousel1 = "../src/assets/img/carousel1.jpg";
    this.carousel2 = "../src/assets/img/carousel2.png";
    this.carousel3 = "../src/assets/img/carousel3.jpg";
    this.carousel4 = "../src/assets/img/carousel4.jpg";

  }

  ngOnInit(){
    (<any>$('.owl-carousel')).owlCarousel({
      loop:true,
      margin:0,
      items: 1,
      nav: true,
      navText: [
        '<i class="chevron circle grey fitted huge left icon"></i>',
        '<i class="chevron circle grey fitted huge right icon"></i>'
      ],
      autoplay: true,
      autoplayHoverPause: true,
      onChange: this.resetColor, // reset to default dot color
      onChanged: this.changeColor // overide default active dot color to red color
    });

    // css style for the dynamically added content
    (<any>$('.owl-theme .owl-nav')).css({position: "relative", top: "-210px"});
    (<any>$('.owl-prev')).css({float: "left", background: "transparent"});
    (<any>$('.owl-next')).css({float: "right", background: "transparent"});
    (<any>$('.owl-prev, .owl-next')).css({visibility: "hidden"});
    (<any>$('.owl-dots')).css({position: "relative", top: "-45px"});
    (<any>$('.active span')).css({background:"red"});
    (<any>$('.owl-stage-outer')).css({"border-radius": "10px 10px 0px 0px"});
  }

  resetColor = (event:any):void=>{
    (<any>$('span')).css({background: "#D6D6D6"});
  }

  changeColor = ():void=>{
    (<any>$('.active span')).css({background: "red"});
  }
  showNavButton = ():void =>{
    (<any>$('.owl-prev, .owl-next')).css({visibility:"visible"})
  }
  hideNavButton = ():void =>{
    (<any>$('.owl-prev, .owl-next')).css({visibility:"hidden"})
  }

}

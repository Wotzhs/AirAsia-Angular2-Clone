import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit{
  ngOnInit(){
    (<any>$('.browse'))
      .popup({
        lastResort: 'bottom right',
        inline: true,
        hoverable: true,
        delay: {
          show: 300,
          hide: 300
        }
      })
  };
}

import {Component} from '@angular/core';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent {

  aaiconpath: string;
  aalinepath: string;

  constructor(){
    this.aaiconpath = '../src/assets/img/aa_icon.png' ;
    this.aalinepath = '../src/assets/img/aa_line.jpg' ;
  }
}

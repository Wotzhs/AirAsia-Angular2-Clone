import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  template:
  `<span>
      <span>This is brand logo</span>
      <span>menu1</span>
      <span>menu2</span>
      <span>menu3</span>
   </span>
   <router-outlet></router-outlet>`
})

export class AppComponent { }

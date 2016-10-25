import {Component} from '@angular/core';
import {HttpService} from './app.service.ts';

@Component({
  selector: 'my-app',
  template:
  ` <nav-bar></nav-bar>
   <router-outlet></router-outlet>
   `,
  providers: [HttpService]
})

export class AppComponent { }

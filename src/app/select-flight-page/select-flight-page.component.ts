import {Component, OnInit} from '@angular/core'

@Component({
  templateUrl: './select-flight-page.component.html'
})

export class SelectFlightPageComponent {
  ngOnInit(){
    var a = document.createElement("h1")
    a.innerHTML = "haha"
    document.body.appendChild(a)
  }
}

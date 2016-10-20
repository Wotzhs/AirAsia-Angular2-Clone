import {Component, OnInit, trigger, state, style, transition, animate} from '@angular/core';
import {Updates} from './updates';
import {UpdatesService} from './updates.service';

@Component({
  selector: 'updates',
  templateUrl: './updates.component.html',
  styleUrls: ['./updates.component.css'],
  providers: [UpdatesService]
})

export class UpdatesComponent {

  updates: Updates[];
  animation: string;

  constructor(private updatesService: UpdatesService){}

  getUpdates(): void{
    this.updatesService.getUpdates().then(updates => this.updates = updates)
  }

  ngOnInit(): void{
    this.getUpdates();
  }
}

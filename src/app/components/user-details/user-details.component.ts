import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  @Input()
  sentItem = new EventEmitter;

  getUsername = (event) => {
    this.sentItem = event.value;
    console.log('Value',this.sentItem);
  };

  constructor() {

  }
  ngOnInit() {
    console.log('Sent',this.sentItem);
  }
}

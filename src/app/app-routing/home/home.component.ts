import { Component, OnInit } from '@angular/core';
import { Study } from '../../study';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  studies = [
    new Study('Foresight Budgets', 'Description of Foresight Budgets'),
    new Study('OrdrSlip Kiosk', 'Description of OrdrSlip Kiosk'),
    new Study('App Skin', 'Description of App Skin'),
    new Study('Learn Node Project', 'Description of Learn Node Project'),
    new Study('Shopping List App', 'Description of Shopping List App'),
    new Study('Robot Fight Club Logo', 'Description of Robot Fight Club Logo')
  ];

  constructor() { }

  ngOnInit() {
  }

}

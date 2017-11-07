import { Component, OnInit } from '@angular/core';
import { Study } from '../../study';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  studies = [
    new Study('Foresight Budgets', 'Description of Foresight Budgets', ['HTML', 'CSS', 'AngularJS', 'Illustrator']),
    new Study('OrdrSlip Kiosk', 'Description of OrdrSlip Kiosk', ['HTML', 'CSS', 'Angular 2', 'Illustrator']),
    new Study('App Skin', 'Description of App Skin', ['HTML', 'CSS', 'Angular 2']),
    new Study('Learn Node Project', 'Description of Learn Node Project', ['HTML', 'CSS', 'Angular 2', 'MongoDB']),
    new Study('Shopping List App', 'Description of Shopping List App', ['HTML', 'CSS', 'Angular 2']),
    new Study('Robot Fight Club Logo', 'Description of Robot Fight Club Logo', ['Illustrator'])
  ];

  constructor() { }

  ngOnInit() {
  }

}

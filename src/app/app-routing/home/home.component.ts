import { Component, OnInit } from '@angular/core';

import { Study } from '../../study';

import { CaseStudyService } from '../case-study.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  studies: Study[] = [];

  constructor(
    private caseStudyService: CaseStudyService
  ) { }

  ngOnInit() {
    this.getCaseStudies();
  }

  getCaseStudies(): void {
      this.caseStudyService.getCaseStudies()
        .subscribe(studies => this.studies = studies);
  }

}

import { Component, OnInit } from '@angular/core';

import { Study } from '../../study';
import { Highlight } from '../../highlight';

import { CaseStudyService } from '../case-study.service';
import { HighlightService } from '../highlight.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  studies: Study[] = [];
  highlights: Highlight[] = [];

  constructor(
    private caseStudyService: CaseStudyService,
    private highlightService: HighlightService
  ) { }

  ngOnInit() {
    this.getCaseStudies();
    this.getHighlights();
  }

  getHighlights(): void {
    this.highlightService.getHighlights()
      .subscribe(highlights => this.highlights = highlights);
}

  getCaseStudies(): void {
    this.caseStudyService.getCaseStudies()
      .subscribe(studies => this.studies = studies);
  }

}

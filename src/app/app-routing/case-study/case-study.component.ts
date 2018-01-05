import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Study } from '../../study';
import { CaseStudyService }  from '../case-study.service';

@Component({
  selector: 'app-case-study',
  templateUrl: './case-study.component.html',
  styleUrls: ['./case-study.component.scss']
})
export class CaseStudyComponent implements OnInit {
  @Input() study: Study;

  constructor(
    private route: ActivatedRoute,
    private caseStudyService: CaseStudyService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getCaseStudy();
  }

  getCaseStudy(): void {
    const name = this.route.snapshot.paramMap.get('name');
    this.caseStudyService.getCaseStudy(name)
      .subscribe(study => {
        this.study = study
        console.log("this.study is: ", this.study);
      });
  }

}

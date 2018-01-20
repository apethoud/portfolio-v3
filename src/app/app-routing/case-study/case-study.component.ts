import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Study } from '../../study';
import { CaseStudyService }  from '../case-study.service';

import { DragScrollDirective } from 'ngx-drag-scroll';

@Component({
  selector: 'app-case-study',
  templateUrl: './case-study.component.html',
  styleUrls: ['./case-study.component.scss']
})
export class CaseStudyComponent implements OnInit {
  @Input() study: Study;
  @ViewChild('hero', {read: DragScrollDirective}) ds: DragScrollDirective;

  constructor(
    private route: ActivatedRoute,
    private caseStudyService: CaseStudyService,
    private location: Location
  ) { }

  featuredColumns = [];

  ngOnInit(): void {
    this.getCaseStudy();
  }

  getCaseStudy(): void {
    const name = this.route.snapshot.paramMap.get('name');
    this.caseStudyService.getCaseStudy(name)
      .subscribe(study => {
        this.study = study
        this.populateColumns();
      });
  }

  populateColumns() {
    let that = this;
    this.study.featuredColIndex.forEach(function(indexItem){
      let column = [];
      indexItem.featureOrder.forEach(function(orderNum){
        for (let i = 0; i < that.study.featuredItems.length; i++) {
            if (that.study.featuredItems[i].id === orderNum) {
              column.push(that.study.featuredItems[i]);
            }
        }
      });
      that.featuredColumns.push(column);
    });
  };

  isString(itemContent) {
    return typeof itemContent === 'string';
  }
  
  moveLeft() {
    this.ds.moveLeft();
  }

  moveRight() {
    this.ds.moveRight();
  }
}

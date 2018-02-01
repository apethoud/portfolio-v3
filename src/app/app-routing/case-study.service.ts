import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';

import { Study } from '../study';
import { STUDIES } from '../mock-studies';

@Injectable()
export class CaseStudyService {

  constructor() { }

  getCaseStudies(): Observable<Study[]> {
    return of(STUDIES);
  }

  getCaseStudy(name: string): Observable<Study> {
    return of(STUDIES.find(study => study.name === name));
  }

}

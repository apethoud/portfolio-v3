import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';

import { Highlight } from '../highlight';
import { HIGHLIGHTS } from '../mock-highlights';

@Injectable()
export class HighlightService {

  constructor() { }

  getHighlights(): Observable<Highlight[]> {
    return of(HIGHLIGHTS);
  }

  getHighlight(name: string): Observable<Highlight> {
    return of(HIGHLIGHTS.find(highlight => highlight.name === name));
  }

}

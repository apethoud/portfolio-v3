import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module'

import { AppComponent } from './app.component';
import { HomeComponent } from './app-routing/home/home.component';
import { CaseStudyComponent } from './app-routing/case-study/case-study.component';

import { CaseStudyService } from './app-routing/case-study.service';
import { HighlightService } from './app-routing/highlight.service';
import { ContactFormComponent } from './contact-form/contact-form.component';

import { DragScrollModule } from 'ngx-drag-scroll';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragScrollModule,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    CaseStudyComponent,
    ContactFormComponent
  ],
  providers: [ 
    CaseStudyService,
    HighlightService
   ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

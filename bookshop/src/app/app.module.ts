import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SideComponent } from './side/side.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SectionComponent } from './section/section.component';
import { DirexeComponent } from './direxe/direxe.component';
import {FormsModule} from '@angular/forms';
import { DatafilterPipe } from './pipe/data-filter/datafilter.pipe';
import { ParentComponent } from './iao/parent/parent.component';
import { ChildAComponent } from './iao/child-a/child-a.component';
import { ChildBComponent } from './iao/child-b/child-b.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SideComponent,
    CarouselComponent,
    SectionComponent,
    DirexeComponent,
    DatafilterPipe,
    ParentComponent,
    ChildAComponent,
    ChildBComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

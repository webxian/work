import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SideComponent } from './side/side.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SectionComponent } from './section/section.component';
import { ItemsComponent } from './section/items/items.component';
import { StarComponent } from './section/items/star/star.component';
import { DirexeComponent } from './direxe/direxe.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SideComponent,
    CarouselComponent,
    SectionComponent,
    ItemsComponent,
    StarComponent,
    DirexeComponent
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

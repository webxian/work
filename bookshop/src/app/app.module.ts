import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JsonpModule, HttpModule } from '@angular/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SideComponent } from './side/side.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SectionComponent } from './section/section.component';
import { DirexeComponent } from './direxe/direxe.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatafilterPipe } from './pipe/data-filter/datafilter.pipe';
import { ParentComponent } from './iao/parent/parent.component';
import { ChildAComponent } from './iao/child-a/child-a.component';
import { ChildBComponent } from './iao/child-b/child-b.component';
import { VoteComponent } from './homework/vote/vote.component';
import { VoteItemComponent } from './homework/vote-item/vote-item.component';
import { TemplateFormComponent } from './forms/template-form/template-form.component';
import { ReativeFormComponent } from './forms/reative-form/reative-form.component';
import { ItemComponent } from './item/item.component';
import { StarComponent } from './star/star.component';
import { SomeComponent } from './math/some/some.component';
import { MathService } from './math/math.service';
import { MathplusService } from './math/mathplus.service';
import { HttpComponent } from './http/http.component';
import { LoginComponent } from './route/login/login.component';
import { MainComponent } from './route/main/main.component';
import { RegistComponent } from './route/regist/regist.component';
import { AboutusComponent } from './route/aboutus/aboutus.component';


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
    ChildBComponent,
    VoteComponent,
    VoteItemComponent,
    TemplateFormComponent,
    ReativeFormComponent,
    ItemComponent,
    StarComponent,
    SomeComponent,
    HttpComponent,
    LoginComponent,
    MainComponent,
    RegistComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [ 
    {provide:MathService,useClass:MathplusService},
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

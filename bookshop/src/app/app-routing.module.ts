import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistComponent } from './route/regist/regist.component';
import { LoginComponent } from './route/login/login.component';
import { AboutusComponent } from './route/aboutus/aboutus.component';
import { NavComponent } from './nav/nav.component';


const routes: Routes = [
  // {path:'',component:RegistComponent},
  {path:'',redirectTo:'regist',pathMatch:'prefix'},
  {path:'regist',component:RegistComponent},
  {path:'login',component:LoginComponent},
  {path:'about',component:AboutusComponent},
  {path:'about',component:AboutusComponent},
  {path:'nav',component:NavComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

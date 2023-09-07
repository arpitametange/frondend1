import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardpageComponent } from './cardpage/cardpage.component';
import { CakepageComponent } from './cakepage/cakepage.component';

const routes: Routes = [
  {path:'',redirectTo:'main',pathMatch:'full'},
  {path:'main',component:CakepageComponent},
  {path:'card',component:CardpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

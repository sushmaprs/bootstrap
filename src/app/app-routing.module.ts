import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarrComponent } from './navbarr/navbarr.component';
const routes: Routes = [
  {path: 'NavbarrComponent', component: NavbarrComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

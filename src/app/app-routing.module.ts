import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HolamundoComponent } from './holamundo/holamundo.component';

const routes: Routes = [
  { path: 'holamundo', component: HolamundoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

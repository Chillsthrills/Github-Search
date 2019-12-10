import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { ProfileComponent } from './components/profile/profile.component'


const routes: Routes = [
  { path: 'home', component: ViewComponent },
  { path: 'search', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

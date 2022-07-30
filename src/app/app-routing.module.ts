import { RouterModule, Route } from '@angular/router';
import { NgModule } from '@angular/core';
import { UserDetailsComponent } from './components/user-details/user-details.component';

const routes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/'
  },
  {
    path: 'user-details',
    component: UserDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

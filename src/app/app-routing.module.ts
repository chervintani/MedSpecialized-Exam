import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { UsersComponent } from './home/components/users/users.component';
import { SidenavComponent } from './home/sidenav/sidenav.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', redirectTo: ""},
  {
    path: "home",
    component: SidenavComponent,
    children: [
      {path: "users", component: UsersComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

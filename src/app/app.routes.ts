import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MembersComponent } from './members/members.component';
import { EventComponent } from './event/event.component';
import { NavbarComponent } from './navbar/navbar.component';


export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'member', component: MembersComponent},
    {path: 'event', component: EventComponent},
    {path: 'navbar', component: NavbarComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
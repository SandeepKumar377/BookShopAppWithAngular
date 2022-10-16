import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AuthComponent } from './auth/auth.component';
import { ChangePasswordComponent } from './auth/components/change-password/change-password.component';
import { LoginComponent } from './auth/components/login/login.component';
import { SignupComponent } from './auth/components/signup/signup.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
 
const routes : Routes=[
  {path:'about-us', component: AboutUsComponent},
  {path:'contact-us', component: ContactUsComponent},
  {path:'auth', component: AuthComponent, children:[
    {path:'login', component: LoginComponent},
    {path:'signup', component: SignupComponent},
    {path:'changePassword', component: ChangePasswordComponent},
  ]},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
})
export class AppRoutingModule { }

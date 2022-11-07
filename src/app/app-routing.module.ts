import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AuthComponent } from './auth/auth.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { UserComponent } from './user/user.component';
 
const routes : Routes=[
  {path:'', redirectTo:'about-us', pathMatch:'full'},
  {path:'about-us', component: AboutUsComponent},
  {path:'contact-us', component: ContactUsComponent},
  {
    path:'auth', component: AuthComponent, 
    loadChildren:()=> import('./auth/auth.module').then(x=>x.AuthModule)
  },
  {
    path:'user/:userId', component: UserComponent, 
    loadChildren:()=> import('./user/user.module').then(x=>x.UserModule)
  },
  {path:'**', component: NotFoundComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
})
export class AppRoutingModule { }

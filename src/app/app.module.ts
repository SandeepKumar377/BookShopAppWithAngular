import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './public-components/about-us/about-us.component';
import { ContactUsComponent } from './public-components/contact-us/contact-us.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './public-components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    ContactUsComponent,    
    HomeComponent,
  ],
  imports: [
    BrowserModule,   
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

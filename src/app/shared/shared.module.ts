import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SharedComponent } from './shared.component';
import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from './material.module';



@NgModule({
  declarations: [
    NotFoundComponent,
    SharedComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MaterialModule,
  ],
  exports:[
    HeaderComponent
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SharedComponent } from './shared.component';
import { SharedRoutingModule } from './shared-routing.module';



@NgModule({
  declarations: [
    NotFoundComponent,
    SharedComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }

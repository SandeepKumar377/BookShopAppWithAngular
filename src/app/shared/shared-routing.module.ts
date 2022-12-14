import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SharedComponent } from './shared.component';

const routes: Routes = [
  {
    path: 'shared', component: SharedComponent,
    children: [
      { path: 'not-found', component: NotFoundComponent },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }

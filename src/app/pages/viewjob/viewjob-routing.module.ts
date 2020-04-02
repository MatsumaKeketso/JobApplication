import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewjobPage } from './viewjob.page';

const routes: Routes = [
  {
    path: '',
    component: ViewjobPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewjobPageRoutingModule {}

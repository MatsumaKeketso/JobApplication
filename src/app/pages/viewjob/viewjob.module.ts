import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewjobPageRoutingModule } from './viewjob-routing.module';

import { ViewjobPage } from './viewjob.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewjobPageRoutingModule
  ],
  declarations: [ViewjobPage]
})
export class ViewjobPageModule {}

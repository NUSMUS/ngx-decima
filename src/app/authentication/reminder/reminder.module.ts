import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ReminderComponent } from './reminder.component';

import { ReminderRoutingModule } from './reminder.routing.module';

@NgModule({
  imports: [
    CommonModule,
    ReminderRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ReminderComponent]
})
export class ReminderModule { }

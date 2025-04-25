import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { StudnetListComponent } from './studnet-list/studnet-list.component';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    StudentComponent,
    StudnetListComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    SharedModule,
    RouterModule
  ]
})
export class StudentModule { }

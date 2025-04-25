import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { SharedModule } from '../../shared/shared.module';

import { RouterModule } from '@angular/router';
import { TeacherComponent } from './teacher.component';

@NgModule({
  declarations: [
    TeacherComponent,
    TeacherListComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    SharedModule,
    RouterModule
  ]
})
export class TeacherModule { }

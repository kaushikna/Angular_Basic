import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherComponent } from './teacher.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';

const routes: Routes = [
  { 
  path: '', 
  component: TeacherComponent,
  children:[
    {
      path:'',
      pathMatch:'full',
      redirectTo:'list'
    },
    {
      path:'list',
      component:TeacherListComponent
    }
  ]
 }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }

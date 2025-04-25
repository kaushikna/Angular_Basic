import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student.component';
import { StudnetListComponent } from './studnet-list/studnet-list.component';

const routes: Routes = [
  { path: '', 
    component: StudentComponent,
    children:[
      {
        path:'',
        pathMatch:'full',
        redirectTo:'list'
      },
      {
        path:'list',
        component:StudnetListComponent
      }
    ]
  
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }

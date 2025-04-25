import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './shared/login/login.component';
import { AuthGuard } from './interceptors/auth.guard';
import { LoginGuard } from './interceptors/login.guard';

const routes: Routes = [
  {
    path:'',
    redirectTo:'student',
    pathMatch:'full'
  },
  {
    path:'login',
    canActivate: [LoginGuard],
    component:LoginComponent
  },
  { path: 'student', 
    canActivate:[AuthGuard],
    loadChildren: () => import('./modules/student/student.module').then(m => m.StudentModule) 
  },
  { path: 'teacher', 
    canActivate:[AuthGuard],
    loadChildren: () => import('./modules/teacher/teacher.module').then(m => m.TeacherModule) 
  },
  {
    path:'**',
    redirectTo:'student/list'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

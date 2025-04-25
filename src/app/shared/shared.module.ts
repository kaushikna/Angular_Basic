import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { HeaderComponent } from './header/header.component';

import { LogoutModalComponent } from './logout-modal/logout-modal.component';
import { MaterialModule } from './material.module';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [HeaderComponent,LogoutModalComponent,LoginComponent],
  imports: [MaterialModule,CommonModule,RouterModule ],
  exports: [MaterialModule,LoginComponent,HeaderComponent,LogoutModalComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [MatDialog]
})
export class SharedModule { }
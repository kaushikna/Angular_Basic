import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-logout-modal',
  standalone: false,
  templateUrl: './logout-modal.component.html',
  styleUrl: './logout-modal.component.scss'
})
export class LogoutModalComponent {

  constructor( 
    public dialogRef: MatDialogRef<LogoutModalComponent>,
    private router: Router,
    private authservice:AuthService
  ){}
  close(){
    this.dialogRef.close();
  }

  logOut(){
    this.authservice.logout();
    this.close();
    this.router.navigateByUrl('/login')
  }
}

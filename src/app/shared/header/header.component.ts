import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LogoutModalComponent } from '../logout-modal/logout-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  showMenu: boolean = false;
  constructor(
    private router:Router,
    private dialog:MatDialog
  ){}

  onMenuIconClick(){
    this.showMenu = !this.showMenu
  }

routernavi(){
  this.router.navigateByUrl('/teacher')
}

onLogout(){
  let dialogRef = this.dialog.open(LogoutModalComponent,{
    height: '350px', 
    width: '350px', 
    panelClass: ['confimationModal','modal_height_widht']
  })

}
}

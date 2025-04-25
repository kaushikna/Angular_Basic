import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-student';

  constructor(private authservice:AuthService) {
    this.authservice.emitLoginComplete.subscribe((value:boolean)=>{
      this.isloginActived =value
    })
  }


  isloginActived:boolean=false;

  ngOnInit(): void {
    this.isloginActived = this.authservice.loginActivated();
    
  }

}

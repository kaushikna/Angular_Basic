import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SpinnerService } from '../../services/spinner.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ToasterMessageService } from '../../services/toaster-meesage.service';
import { ToastMessageModel } from '../../models/common/common.model';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  loginForm !: FormGroup;

  constructor(
    private fb:FormBuilder,
    private spinnerservice:SpinnerService,
    private authservice:AuthService,
    private router:Router,
    private toasterService:ToasterMessageService
  ){}

ngOnInit(): void {
  this.inInitForm()
  
}
inInitForm(){
  this.loginForm = this.fb.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.minLength(6)]]
  })
}
getcontrol(name:string){
  return this.loginForm.get(name)
}
onSubmit(){
  
  if(this.loginForm.invalid){
    return
  }

  this.spinnerservice.showSpinner();
  let Success = this.authservice.login(this.loginForm.value);
  if(Success){
    setTimeout(() => {
      this.spinnerservice.hideSpinner();
    }, 3000);
    let toast: ToastMessageModel = {
      message: 'Login successful!',
      type: 'Success'
    }
    this.toasterService.showSuccessMessage(toast);
    this.router.navigate(['/student']);
  }else{
    setTimeout(() => {
      this.spinnerservice.hideSpinner();
    }, 3000);
  }
}
}

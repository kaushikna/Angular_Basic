import { HttpClient } from '@angular/common/http';
import { Injectable, model } from '@angular/core';
import { AuthModel } from '../models/auth/auth.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public emitLoginComplete: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor() { 

  }

  login(modal:AuthModel): boolean{
    try {
      localStorage.setItem('Auth_Details',JSON.stringify(modal))
      this.loginActivated();
      return true
    } catch (error) {
      return false
    }
    
  }
  loginActivated():boolean {

    let islogin = JSON.parse(localStorage.getItem('Auth_Details') !);

    if(islogin){
    this.emitLoginComplete.next(true)
      return true
    }else{
    this.emitLoginComplete.next(false)
      return false
    }
    
  }
  logout(){
    localStorage.removeItem('Auth_Details');
    this.loginActivated()

  }
}

import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { ToastrService } from "ngx-toastr";
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class authInterceptor implements HttpInterceptor {
  isShowcount :number = 0;
  constructor(private  toaster: ToastrService, private router: Router,private authserivce:AuthService){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(this.setHeaders(req)).pipe(
      catchError((error:HttpErrorResponse)=>{
        if(error && (error.status == 401 || error.status == 403)){
          this.clearHistory();
          if( this.isShowcount == 0 && (this.router.url !== 'login')){
            this.toaster.error("Session timed out, please login again!");
            this.router.navigate(["/login"]);
            this.authserivce.loginActivated();
          }
          this.isShowcount ++ ;
        }
        return throwError(() => new Error(error?.message));
      })
    )
  }
  clearHistory(){
    localStorage.clear();
    sessionStorage.clear();
}
  setHeaders(request:HttpRequest<any>){

    const userdata = JSON.parse(localStorage.getItem('Auth_Details') !);
    let clonedRequest = request.clone();
    if(userdata){
      const token = userdata.access_token

    const header:any={
      Authorization:`Bearer ${token}`
    }

    const isFormdata = request.body instanceof FormData;

    if(!isFormdata){
      header['Content-Type'] = 'application/json'
    }
    return clonedRequest.clone({
      setHeaders:header
    })
    }
    return clonedRequest
  }
};

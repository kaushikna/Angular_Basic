import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  constructor(private spinner:NgxSpinnerService) { }


  showSpinner(){
    console.log("KNA showSpinner");
    
    this.spinner.show('mainSpinner',{
      type:'line-spin-clockwise-fade',
      bdColor:'rgba(0,0,0,0.8)',
      size:'medium',
      fullScreen:true
    });
  }

  hideSpinner(){
    console.log("KNA hideSpinner");

    
    this.spinner.hide('mainSpinner');
  }
}

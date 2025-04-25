import { Injectable } from '@angular/core';
import { ToastMessageModel } from '../models/common/common.model';
import { timeout } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToasterMessageService {

  constructor(private toastr:ToastrService) { }
  showSuccessMessage(message:ToastMessageModel){
    console.log("showSuccessMessage");
    
    this.toastr.success(message.message,'',{
      closeButton:true,
      timeOut:3000
    })
  }
  showErrorMessage(message:ToastMessageModel){
    this.toastr.error(message.message,'',{
      closeButton:true,
      timeOut:3000
    })
  }

  showInfoMessage(message:ToastMessageModel){
    this.toastr.info(message.message,'',{
      closeButton:true,
      timeOut:3000
    })
  }

  showWarnMessage(message:ToastMessageModel){
    this.toastr.warning(message.message,'',{
      closeButton:true,
      timeOut:3000
    })
  }
}

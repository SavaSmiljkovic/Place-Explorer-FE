import {Injectable} from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {PopUpMessageType} from "../model/popUpMessageType.model";

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(
    private toastr: ToastrService
  ) {
  }

  popUpMessage(type: PopUpMessageType, message: string): void {
    if (type === PopUpMessageType.SUCCESS) {
      this.toastr.success(message);
    } else if (type === PopUpMessageType.WARNING) {
      this.toastr.warning(message)
    } else if (type === PopUpMessageType.ERROR) {
      this.toastr.error(message);
    }
  }

}

import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {PopUpMessageType} from "../model/popUpMessageType.model";
import {ToastService} from "./toast.service";

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(
    private router: Router,
    private http: HttpClient,
    private toastService: ToastService,
  ) {
  }

  public roundNumber(number: number): number {
    let rounder: number = Math.pow(10, 2);
    return Math.round((number + Number.EPSILON) * rounder) / rounder;
  }

  handleError(data: any) {
    if (data.error) {
      this.toastService.popUpMessage(PopUpMessageType.ERROR, JSON.stringify(data.error));
    } else {
      this.toastService.popUpMessage(PopUpMessageType.ERROR, 'Something went wrong...');
    }
  }

  notInScope(what: string) {
    let message: string = 'Functionality "' + what + '" is out of scope for this release..';
    this.toastService.popUpMessage(PopUpMessageType.WARNING, message);
  }

}

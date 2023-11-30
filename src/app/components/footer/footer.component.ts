import {Component} from '@angular/core';
import {GeneralService} from "../service/general.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  headquartersLocation = "https://www.google.com/maps/place/Zürich,+Switzerland/@47.3774924,8.4955363,13z/data=!3m1!4b1!4m6!3m5!1s0x47900b9749bea219:0xe66e8df1e71fdc03!8m2!3d47.3768866!4d8.541694!16zL20vMDg5NjY?entry=ttu"

  constructor(
    public generalService: GeneralService
  ) {
  }

}


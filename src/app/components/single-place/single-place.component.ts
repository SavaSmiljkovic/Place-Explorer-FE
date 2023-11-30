import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {GeneralService} from "../service/general.service";
import {Observable} from "rxjs";
import {Place} from "../model/place.model";
import {PlaceService} from "../service/place.service";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-single-place',
  templateUrl: './single-place.component.html',
  styleUrls: ['./single-place.component.css']
})
export class SinglePlaceComponent implements OnInit {

  place$: Observable<Place>;
  env = environment;

  constructor(
    private route: ActivatedRoute,
    private placeService: PlaceService,
    public generalService: GeneralService
  ) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params.uid) {
        this.place$ = this.placeService.getSingle(params.uid);
      }
    }, data => {
      this.generalService.handleError(data);
    });
  }

  sameOrder() {
    return 0;
  }

}

import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Place} from "../model/place.model";
import {PlaceService} from "../service/place.service";
import {GeneralService} from "../service/general.service";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-all-places',
  templateUrl: './all-places.component.html',
  styleUrls: ['./all-places.component.css']
})
export class AllPlacesComponent implements OnInit {

  places$: Observable<Place[]>;
  env = environment;

  constructor(
    private placeService: PlaceService,
    public generalService: GeneralService
  ) {
  }

  ngOnInit(): void {
    this.places$ = this.placeService.getAll();
  }

  notInScope(event: Event, what: string) {
    this.generalService.notInScope(what);
    event.stopPropagation();
  }
}

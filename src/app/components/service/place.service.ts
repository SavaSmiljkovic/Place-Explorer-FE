import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Place} from "../model/place.model";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  constructor(
    private http: HttpClient
  ) {
  }

  public getAll(): Observable<Place[]> {
    return this.http.get<Place[]>(environment.endpoint + environment.placesEndpoint + 'all');
  }

  public getSingle(uid: string): Observable<Place> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('uid', uid);
    return this.http.get<Place>(environment.endpoint + environment.placesEndpoint + 'single', {params: queryParams});
  }

}

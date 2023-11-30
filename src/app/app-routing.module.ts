import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {environment} from "../environments/environment";
import {AllPlacesComponent} from "./components/all-places/all-places.component";
import {SinglePlaceComponent} from "./components/single-place/single-place.component";

window.addEventListener("orientationchange", function () {
  location.reload();
}, false);

let routes: Routes = [
  {
    path: '',
    redirectTo: environment.allPlacesUrl,
    pathMatch: 'full'
  },
  {
    path: environment.allPlacesUrl,
    component: AllPlacesComponent
  },
  {
    path: environment.singlePlaceUrl,
    component: SinglePlaceComponent
  },
  {
    path: '**',
    redirectTo:
    environment.allPlacesUrl
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled'
    })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {
}

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {NavbarComponent} from "./components/navbar/navbar.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";
import {ToastrModule} from "ngx-toastr";
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import {AgmCoreModule} from "@agm/core";
import {FooterComponent} from "./components/footer/footer.component";
import {AllPlacesComponent} from "./components/all-places/all-places.component";
import {SinglePlaceComponent} from "./components/single-place/single-place.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AllPlacesComponent,
    SinglePlaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastrModule.forRoot({
      closeButton: false,
      progressBar: true,
      positionClass: 'toast-top-center',
      preventDuplicates: true,
      enableHtml: true
    }),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBh_9KKwmbsefV-VyD9aHgkb8ndUUAZwlE',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

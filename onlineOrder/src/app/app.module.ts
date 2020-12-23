import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationComponent } from './features/location/location.component';
import { SearchStoreComponent } from './features/search-store/search-store.component';

@NgModule({
  declarations: [
    AppComponent,
    LocationComponent,
    SearchStoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

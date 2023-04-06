import { DogService } from './services/dog.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Dog } from './models/dog-database';
import { EditDogComponent } from './components/edit-dog/edit-dog.component';

@NgModule({
  declarations: [
    AppComponent,
    EditDogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

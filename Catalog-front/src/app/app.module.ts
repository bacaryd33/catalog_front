import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductswallComponent } from './productswall/productswall.component';
import { FilterComponent } from './filter/filter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
// import { HttpErrorHandler, HandleError } from '../http-error-handler.service';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AppRoutingModule } from './app-routing.module';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component'; // CLI imports AppRoutingModule


import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

const config = {
  apiKey: 'AIzaSyDIsAgss9oGJM9awUip9FsH7xGEzrxlltI',
  authDomain: 'catalogapibackend.firebaseapp.com',
  databaseURL: 'https://catalogapibackend-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'catalogapibackend',
  storageBucket: 'catalogapibackend.appspot.com',
  messagingSenderId: '12206227378',
  appId: "1:12206227378:web:31fc1a4045a83f4b732eab",
  measurementId: "G-TTJZPFHN4F"
};

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductswallComponent,
    FilterComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    MatButtonModule,
    MatPaginatorModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}

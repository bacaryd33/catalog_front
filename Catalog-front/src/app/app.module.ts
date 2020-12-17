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
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SwaggerdocComponent } from './swaggerdoc/swaggerdoc.component'; // CLI imports AppRoutingModule
// import {generate} from 'swagger-angular-generator';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductswallComponent,
    FilterComponent,
    PagenotfoundComponent,
    SwaggerdocComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    MatButtonModule,
    MatPaginatorModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  // const {generate} = require('swagger-angular-generator');
  // generate('conf/api/api-docs.json', 'src/api'); 
 
  
}

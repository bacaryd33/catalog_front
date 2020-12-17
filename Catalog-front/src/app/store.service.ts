import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavigationEnd, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  
  public filterurl : String;
  public productlist;

  constructor (private httpclient: HttpClient, private router: Router){
    router.events.subscribe((event) =>{
      if(event instanceof NavigationEnd){
        this.filterurl = event.urlAfterRedirects.split("/")[2]; //get end of url
      }
    })
  }

  getAllCategories() {
    return this.httpclient.get('https://catalogapibackend-default-rtdb.europe-west1.firebasedatabase.app/store/categorie.json');
  }

  getProducts(){
    if(this.filterurl=="All" || this.filterurl == null){
      this.productlist = this.httpclient.get('https://catalogapibackend-default-rtdb.europe-west1.firebasedatabase.app/store/product.json');
      return this.productlist;
    }
    else{
      this.productlist = this.httpclient.get('https://catalogapibackend-default-rtdb.europe-west1.firebasedatabase.app/store/productbycategorie/'+this.filterurl+'.json');
      return this.productlist;
    }
  }
}

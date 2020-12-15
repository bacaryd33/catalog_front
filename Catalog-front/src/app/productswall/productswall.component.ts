import { StoreService } from './../store.service';
import { Component, OnInit} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';



@Component({
  selector: 'app-productswall',
  templateUrl: './productswall.component.html',
  styleUrls: ['./productswall.component.css']
})
export class ProductswallComponent implements OnInit {

  categories;
  productlist;

  constructor(private storeService: StoreService, private router: Router) {
    router.events.subscribe((event) =>{
      if(event instanceof NavigationEnd){
        this.productlist = this.storeService.getProducts().subscribe(productList => this.productlist = productList);
      }
    })
   }

  ngOnInit(): void {
    this.productlist = this.storeService.getProducts().subscribe(productList => this.productlist = productList);
    this.categories = this.storeService.getAllCategories().subscribe(categoriesList => this.categories = categoriesList);
  }
}

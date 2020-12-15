import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() id : string;
  @Input() libelle : string;
  @Input() reference : string;
  @Input() url : string;
  @Input() prix : Number;
  
  constructor() { }

  ngOnInit(): void {
  }
  

}

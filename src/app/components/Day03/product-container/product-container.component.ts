import { Component } from '@angular/core';
import { IProduct } from 'src/app/Models/iproduct';

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.css']
})
export class ProductContainerComponent {
  products:IProduct[]=[];

  getProduct(product: IProduct){
    this.products.push(product);
    console.log(this.products)
  }
}

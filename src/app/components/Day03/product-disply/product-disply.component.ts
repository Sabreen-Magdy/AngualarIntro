import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/Models/iproduct';

@Component({
  selector: 'app-product-disply',
  templateUrl: './product-disply.component.html',
  styleUrls: ['./product-disply.component.css']
})
export class ProductDisplyComponent {
  @Input() ProductsFromParent:any;
}

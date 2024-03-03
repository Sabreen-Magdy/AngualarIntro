import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl,FormGroup ,Validators } from '@angular/forms';
import { IProduct } from 'src/app/Models/iproduct';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
   productForm:FormGroup=new FormGroup({
    productName:new FormControl('',[
      Validators.required,
      Validators.minLength(5)
    ]),
    productCategory:new FormControl('',[
      Validators.required,
      Validators.minLength(4)
    ]),
    productPrice:new FormControl(0,[
      Validators.required,
      Validators.min(100)
    ]),
    productQuantity:new FormControl(0,[
      Validators.required,
      Validators.min(5)
    ]),
    productDiscount:new FormControl(0,[
      Validators.required,
      Validators.min(5),
      Validators.max(25)
    ]),
    productIsInSale:new FormControl(false)
   });
   get productNameControl(){
      return this.productForm.get('productName');
   }
   get productCategoryControl(){
    return this.productForm.get('productCategory');
    }
    get productPriceControl(){
      return this.productForm.get('productPrice');
    }
    get productQuantityControl(){
      return this.productForm.get('productQuantity');
    }
    get productDiscountControl(){
      return this.productForm.get('productDiscount');
    }
    @Output() sendProductsToDisplay: EventEmitter<any> = new EventEmitter();
    sendValues(e: Event): void {
      e.preventDefault();
       if (this.productForm.valid) {
        this.sendProductsToDisplay.emit(this.productForm.value);
        this.productForm.reset();
      }
    }
  }

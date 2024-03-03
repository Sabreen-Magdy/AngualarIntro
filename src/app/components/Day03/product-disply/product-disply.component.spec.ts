import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDisplyComponent } from './product-disply.component';

describe('ProductDisplyComponent', () => {
  let component: ProductDisplyComponent;
  let fixture: ComponentFixture<ProductDisplyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDisplyComponent]
    });
    fixture = TestBed.createComponent(ProductDisplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductpageComponent } from './productpage.component';
import { ProductService} from '../../../shared/services/product/product.service'
import { Router } from "@angular/router";
import {NgMaterialModule} from '../../../core/designs/ngmaterial.module';
import { CartService } from "src/app/shared/services/cart-service/cart.service";
import { FormsModule } from "@angular/forms";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { Product } from "src/app/shared/entities/product";
describe('ProductpageComponent', () => {
  let component: ProductpageComponent;
  let fixture: ComponentFixture<ProductpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductpageComponent],
      providers:[ProductService,CartService],
     
      imports:[NgMaterialModule,FormsModule,RouterTestingModule,HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  fit('call checkbox check method', () => {
    fixture = TestBed.createComponent(ProductpageComponent);
    component = fixture.componentInstance;

   component.PriceAndBrand();
    
    expect(component).toBeTruthy();
  });
  fit('call checkbox check method', () => {
    fixture = TestBed.createComponent(ProductpageComponent);
    component = fixture.componentInstance;

   component.ScreenSizeAndPrice();
    
    expect(component).toBeTruthy();
  });
  it('call checkbox check method', () => {
    fixture = TestBed.createComponent(ProductpageComponent);
    component = fixture.componentInstance;

   component.ScreenSizeAndBrandAndPrice();
    
    expect(component).toBeTruthy();
  });
  it('call checkbox check method', () => {
    fixture = TestBed.createComponent(ProductpageComponent);
    component = fixture.componentInstance;

   component.ScreenSizeAndBrand();
    
    expect(component).toBeTruthy();
  });
});

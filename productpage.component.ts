import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Product } from '../../../shared/entities/product';
import { ProductService } from '../../../shared/services/product/product.service';

import { filter } from 'rxjs/operators';

import AOS from 'aos';
import { from, Subscription } from "rxjs";
import { SearchService } from "src/app/shared/services/search/search.service";
import { Toast, ToastrService } from 'ngx-toastr';
@Component({
  selector: 'ngsm-productpage',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.css']
})
export class ProductpageComponent implements OnInit {
  url1='../../../../assets/phones/dummy.jpg';
  filteredProducts1: Product[] = [];
  filter: boolean = false;
  filter1: boolean = false;
  filter2: boolean = false;
  interests = [];
  interests1 = [];
  interests2 = [];
  
  noItems:boolean=false;
  bool=false;
  
    subscription:Subscription;
  onScreensizeChange(event, value) {

    if (event.checked) {

      this.interests.push(value);
      if (this.interests.length != 0) {
        this.filter = true;
  
      }

    }
    if (!event.checked) {

      let index = this.interests.indexOf(value);
      if (index > -1) {
        this.interests.splice(index, 1);
      }
      if (this.interests.length == 0) {
        this.filter = false;

      }
    }

    const source = this.products;
    
    if (this.interests.length > 0) {
      this.finalFilterProducts = [];
      this.filteredProducts = [];
      for (let entry of this.interests) {
    
        this.filteredProducts = this.products.filter(prod => prod.screenSize == entry);
      
        for (let entry1 of this.filteredProducts) {
        
          this.finalFilterProducts.push(entry1);
        }

      }
    
      if (this.filter1 == true && this.filter2 == false) {
       
        this.ScreenSizeAndBrand();
      }
      else if (this.filter2 == true && this.filter == false) {
     
        this.ScreenSizeAndPrice();
      }
      else if (this.filter1 == true && this.filter2 == true) {
       
        this.ScreenSizeAndBrandAndPrice();
      }
      else {
        

        this.displayProduct = this.finalFilterProducts;
      }
    }
    else {
      this.finalFilterProducts = this.products;
      if (this.filter1 == true && this.filter2 == false) {
        this.ScreenSizeAndBrand();
      }
      else if (this.filter2 == true && this.filter1 == false) {
        this.ScreenSizeAndPrice();
      }
      else if (this.filter1 == true && this.filter2 == true) {
        this.ScreenSizeAndBrandAndPrice();
      }
      else {
        this.displayProduct = this.products;
      }
    }

  }

  onBrandChange(event, value) {

    if (event.checked) {

      this.interests1.push(value);
      if (this.interests1.length != 0) {
        this.filter1 = true;
       
      }
    }

    if (!event.checked) {

      let index = this.interests1.indexOf(value);
      if (index > -1) {
        this.interests1.splice(index, 1);
        if (this.interests1.length == 0) {
          this.filter1 = false;
          
        }

      }
    }


    const source = this.products;

    if (this.interests1.length > 0) {
      this.finalFilterProducts1 = [];
      this.filteredProducts1 = [];
      for (let entry of this.interests1) {


        this.filteredProducts1 = this.products.filter(prod => prod.brand.name.toLowerCase() == entry.toLowerCase());

        for (let entry1 of this.filteredProducts1) {

          this.finalFilterProducts1.push(entry1);
        }

      }

      if (this.filter == true && this.filter2 == false) {
        this.ScreenSizeAndBrand();

      }
      else if (this.filter2 == true && this.filter == false) {
        this.PriceAndBrand();
      }
      else if (this.filter == true && this.filter2 == true) {
        this.ScreenSizeAndBrandAndPrice();
      }
      else {
     
        this.displayProduct = this.finalFilterProducts1;

      }
    }
    else {
      this.finalFilterProducts1 = this.products;
      if (this.filter == true && this.filter2 == false) {
        this.ScreenSizeAndBrand();
      }
      else if (this.filter2 == true && this.filter == false) {
        this.PriceAndBrand();
      }
      else if (this.filter == true && this.filter2 == true) {
        this.ScreenSizeAndBrandAndPrice();
      }
      else {
        this.displayProduct = this.products;
      }
    }

  }








  onPriceChange(event, value) {

    if (event.checked) {

      this.interests2.push(value);
      if (this.interests2.length != 0) {
        this.filter2 = true;

      }

    }
    if (!event.checked) {

      let index = this.interests2.indexOf(value);
      if (index > -1) {
        this.interests2.splice(index, 1);
      }
      if (this.interests2.length == 0) {
        this.filter2 = false;

      }
    }

    const source = this.products;

    if (this.interests2.length > 0) {
      this.finalFilterProducts2 = [];
      this.filteredProducts2 = [];
      for (let entry of this.interests2) {

        let price1;
        let price2;
        if (parseInt(entry) == 1) {
          price1 = 0; price2 = 5000;

        }
        else if (parseInt(entry) == 2) {
          price1 = 5000; price2 = 10000;
        }
        else if (parseInt(entry) == 3) {
          price1 = 10000; price2 = 50000;
        }
        else if (parseInt(entry) == 4) {
          price1 = 50000; price2 = 500000;
        }
        this.filteredProducts2 = this.products.filter(prod => prod.price <= price2 && prod.price >= price1);

        for (let entry2 of this.filteredProducts2) {

          this.finalFilterProducts2.push(entry2);
        }

      }
      if (this.filter1 == true && this.filter == false) {
        this.PriceAndBrand();
      }
      else if (this.filter == true && this.filter1 == false) {
        this.ScreenSizeAndPrice();
      }
      else if (this.filter == true && this.filter1 == true) {
        this.ScreenSizeAndBrandAndPrice();
      }
      else {

        this.displayProduct = this.finalFilterProducts2;
      }
    }
    else {
      this.finalFilterProducts2 = this.products;
      if (this.filter1 == true && this.filter == false) {
        this.PriceAndBrand();
      }
      else if (this.filter == true && this.filter1 == false) {
        this.ScreenSizeAndPrice();
      }
      else if (this.filter == true && this.filter1 == true) {
        this.ScreenSizeAndBrandAndPrice();
      }
      else {
        this.displayProduct = this.products;
      }
    }

  }


  ScreenSizeAndBrand() {

    this.displayProduct = [];
    for (let entry1 of this.finalFilterProducts1) {
      for (let entry of this.finalFilterProducts) {

        if (entry1.productId == entry.productId) {
          this.displayProduct.push(entry);

        }
      }

    }
  }

  ScreenSizeAndPrice() {
    this.displayProduct = [];
    for (let entry of this.finalFilterProducts) {


      for (let entry2 of this.finalFilterProducts2) {


        if (entry.productId == entry2.productId) {
          this.displayProduct.push(entry);

        }
      }

    }
  }
  PriceAndBrand() {

    this.displayProduct = [];
    for (let entry1 of this.finalFilterProducts1) {


      for (let entry2 of this.finalFilterProducts2) {


        if (entry1.productId == entry2.productId) {
          this.displayProduct.push(entry1);

        }
      }

    }
  }
  ScreenSizeAndBrandAndPrice() {


    this.displayProduct = [];
    for (let entry1 of this.finalFilterProducts1) {
      for (let entry of this.finalFilterProducts) {
        for (let entry2 of this.finalFilterProducts2) {

          if (entry1.productId == entry.productId && entry1.productId == entry2.productId) {

            this.displayProduct.push(entry1);

          }
        }
      }

    }


  }



  products: Product[] = [];
  filteredProducts: Product[] = [];
  filteredProducts2: Product[] = [];
  finalFilterProducts: Product[] = [];
  finalFilterProducts1: Product[] = [];
  finalFilterProducts2: Product[] = [];
  displayProduct: Product[] = [];
  search:string;
  isProductLoaded: boolean = false;
  constructor(private router: Router, private productService: ProductService,private searchService:SearchService, private toastr:ToastrService) {

    this.isProductLoaded = false;

  

       

 
    this.searchService.call.subscribe(
      ()=>this.ngOnInit()
    );
    

  }

  ngOnInit() {
    AOS.init();
    if (this.searchService.getSearchKey() != null) {
      this.isProductLoaded = false;
      this.search = this.searchService.getSearchKey();
      console.log(this.search);

      this.searchService.postSearch(this.search).subscribe(data => {


        this.products = data.body;
        console.log(this.products);



        this.isProductLoaded = true;
        if(this.products.length==0){
          this.noItems=true;
        }else{
          this.noItems=false;
        }
      }, error => {
        this.isProductLoaded = true;
        console.log(error);
      }
      )
    }

    else {
      this.isProductLoaded = false;

      this.productService.getProducts().subscribe(data => {


        this.products = data.body;
        console.log(this.products);



        this.isProductLoaded = true;
        if(this.products.length==0){
          this.noItems=true;
          this.toastr.warning('No Products');
          this.router.navigateByUrl('/error');
        }else{
          this.noItems=false;
        }
      }, error => {
        this.isProductLoaded = true;
        console.log(error);
      }
      )
    }
  
  }

}

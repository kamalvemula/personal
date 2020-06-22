import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../entities/product';
import { Review } from "src/app/shared/entities/review";
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products : Product[] = [];


  constructor(private httpService: HttpClient, private toastr:ToastrService, public router:Router) { 
    this.httpService.get('../assets/product.json').subscribe(data =>{
      this.products = data as Product[];
     // console.log(this.products[3]);
    if(this.products!=null){
      this.toastr.success('Loading Products');
      this.router.navigateByUrl('/product');

    }
    else{
      this.toastr.error('Error in fetching the products');
      this.router.navigateByUrl('/error');
    }
    })
  }
  
  getProduct(id: number): Product {
    for(let product of this.products){
      if(id == product.productId){
        return product;
      }
    }

     
  }
  sendReply(review:Review){
    
  }
}

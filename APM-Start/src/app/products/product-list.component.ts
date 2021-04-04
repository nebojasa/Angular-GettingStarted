import { Component, OnInit, EventEmitter } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

 @Component({
   selector: 'pm-products',
   templateUrl: './product-list.component.html',
   styleUrls: ['./product-list.component.css']
 })

 export class ProductListComponent implements OnInit {
   pageTitile = 'Product List';
   imageWidth = 50.0;
   imageMargin = 2.0;
   showImage = false;
   _filterValue: string = '';


   public get filterValue() : string {
     return this._filterValue;
   }

   public set filterValue(v : string) {
     this._filterValue = v;
     this.filteredProducts = this.performFiltering(v);
     console.log('In setter:', v);
   }

   filteredProducts: IProduct[] = [];
   products: IProduct[] = [];
   
   constructor(private productService: ProductService) { }

   toggleImage(): void {
     this.showImage = !this.showImage;
   }

   performFiltering(filterBy: string): IProduct[] {
     filterBy = filterBy.toLocaleLowerCase();
     return this.products.filter((product:IProduct) => product.productName.toLocaleLowerCase().includes(filterBy));
    throw new Error('Method not implemented.');
  }

   ngOnInit() {
     console.log('In OnInit');
     this.products = this.productService.getProducts();
     this.filteredProducts = this.products;
   }

   onRatingClickedEvent(message: string): void {
     this.pageTitile = 'Product list: ' + message;
   }
 }

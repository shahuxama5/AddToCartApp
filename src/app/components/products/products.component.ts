import { CartService } from './../../services/cart.service';
import { ApiService } from '../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productList: any;
  filterCategory: any;
  searchKey: string = '';

  constructor(private apiService: ApiService, private cartService: CartService) { }

  ngOnInit(): void {
    this.apiService.getProducts().subscribe(res => {
      this.productList = res;
      this.filterCategory = res;
      this.productList.forEach((a: any) => {
        if(a.category === "women's clothing" || a.category === "men's clothing") {
          a.category = "fashion";
        }
        Object.assign(a, {quantity: 1, total: a.price});
      });
    });
    this.cartService.search.subscribe(res => {
      this.searchKey = res;
    });
  }

  addToCart(item: any) {
    this.cartService.addToCart(item);
  }

  filters(category: string) {
    this.filterCategory = this.productList.filter((a: any) => {
      if(category === a.category || category === '') {
        return a;
      }
    });
  }

}

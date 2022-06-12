import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseApi = 'https://fakestoreapi.com/products/';

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<any>(this.baseApi).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

}

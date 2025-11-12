import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private url = environment.baseUrl + "/cart"

  constructor(private httpClient: HttpClient) {}

  addToCart(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(this.url, product);
  }

  getCartItems(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.url);
  }

  clearCart(): Observable<void> {
    return this.httpClient.delete<void>(this.url);
  }
}

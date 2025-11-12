import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartUrl = environment.baseUrl + "/cart";
    private checkoutUrl = environment.baseUrl + "/checkout";

  constructor(private httpClient: HttpClient) {}

  addToCart(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(this.cartUrl, product);
  }

  getCartItems(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.cartUrl);
  }

  clearCart(): Observable<void> {
    return this.httpClient.delete<void>(this.cartUrl);
  }

  checkout(cartItems: Product[]): Observable<void> {
    return this.httpClient.post<void>(this.checkoutUrl, cartItems);
  }
}

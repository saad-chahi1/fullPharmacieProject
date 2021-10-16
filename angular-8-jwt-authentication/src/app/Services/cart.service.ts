import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../Models/iproduct';

const API_URL = 'http://localhost:8080/api/v1/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  getAllProducts(){
    return this.http.get<IProduct>(API_URL + 'products');
  }

  addProduct(produit): Observable<any> {
    return this.http.post(API_URL + 'products', {
      name: produit.name,
      sousName: produit.sousName,
      description: produit.description,
      image: null,
      price: produit.price,
      category: null
    }, httpOptions);
  }

  /*getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }*/
}

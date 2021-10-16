import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/Models/iproduct';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  products: IProduct[] = [];

  constructor(public cartService : CartService) { }

  ngOnInit() {
    this.getProducts();
  }
  getProducts(): void {
    this.cartService.getAllProducts().subscribe((resp: any) => {
      this.products = resp;
    });
  }

}

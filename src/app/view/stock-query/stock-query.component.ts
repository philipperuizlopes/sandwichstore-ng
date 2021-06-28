import { Component, OnInit } from '@angular/core';
import { Product } from '../../entity/product';
import { ToppingService } from '../../service/topping.service';
import { SandwichTypeService } from '../../service/sandwich-type.service';
import { SandwichType } from '../../entity/sandwich-type';
import { Topping } from '../../entity/topping';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-stock-query',
  templateUrl: './stock-query.component.html',
  styleUrls: ['./stock-query.component.css']
})
export class StockQueryComponent implements OnInit{

  products: Product [] = [];

  constructor(private sandwichTypeService: SandwichTypeService,
              private toppingService: ToppingService) { }

  ngOnInit() {
    this.getSandwichTypes();
    this.getToppings();
  }

  getSandwichTypes() {
    this.sandwichTypeService.getAll().subscribe(
      (response: SandwichType []) => {
        this.products = this.products.concat(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    )
  }

  getToppings() {
    this.toppingService.getAll().subscribe(
      (response: Topping []) => {
        this.products = this.products.concat(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    )
  } 

}

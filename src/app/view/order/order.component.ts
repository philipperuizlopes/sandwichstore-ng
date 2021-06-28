import { Component, OnInit } from '@angular/core';
import { SandwichType } from 'src/app/entity/sandwich-type';
import { SandwichSize } from 'src/app/entity/sandwich-size';
import { Topping } from 'src/app/entity/topping';
import { ToppingService } from 'src/app/service/topping.service';
import { SandwichTypeService } from 'src/app/service/sandwich-type.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Sandwich } from 'src/app/entity/Sandwich';
import { SandwichSizeService } from 'src/app/service/sandwich-size.service';
import { SandwichService } from 'src/app/service/sandwich.service';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
  providers: [ConfirmationService]
})
export class OrderComponent implements OnInit {

  sandwich: Sandwich = new Sandwich;
  sandwichSize: SandwichSize;
  sandwichType: SandwichType;
  toppings: Topping [];

  sandwichSizesOptions: SandwichSize [] = [];
  sandwichTypesOptions: SandwichType [] = [];
  toppingsOptions: Topping [] = [];

  constructor(private sandwichSizeService:SandwichSizeService,
              private sandwichTypeService: SandwichTypeService,
              private toppingService: ToppingService,
              private sandwichService: SandwichService,
              private confirmationService:ConfirmationService) { }

  ngOnInit() {
    this.getSizes();
    this.getTypes();
    this.getToppings();
  }

  getSizes() {
    this.sandwichSizeService.getAll().subscribe(
      (response: SandwichSize []) => {
        this.sandwichSizesOptions = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    )    
  }

  getTypes() {
    this.sandwichTypeService.getAll().subscribe(
      (response: SandwichType []) => {
        this.sandwichTypesOptions = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    )
  }

  getToppings() {
    this.toppingService.getAll().subscribe(
      (response: Topping []) => {
        this.toppingsOptions = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    )
  }

  calculatePriceSandwich() {
    this.sandwichService.calculatePrice(this.sandwich).subscribe(
      (response: number) => {
        this.sandwich.totalPrice = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    )
  }

  confirmOrder() {
    this.sandwichService.order(this.sandwich).subscribe(
      (response: Sandwich) => {
        this.sandwich = new Sandwich;
        alert('Your order has been received!')
      },
      (error: HttpErrorResponse) => {
        console.log(error);
        alert(error.error)
      }
    )
  }
  

}

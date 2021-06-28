import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductService } from './product.service';
import { Topping } from '../entity/topping';

@Injectable()
export class ToppingService extends ProductService<Topping>{

  constructor(http: HttpClient){
      super(http);
      this.resource = 'topping'
  }
}
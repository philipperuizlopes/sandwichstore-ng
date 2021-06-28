import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductService } from './product.service';
import { SandwichType } from '../entity/sandwich-type';

@Injectable()
export class SandwichTypeService extends ProductService<SandwichType>{

  constructor(http: HttpClient){
      super(http);
      this.resource = 'sandwich-type'
  }
}
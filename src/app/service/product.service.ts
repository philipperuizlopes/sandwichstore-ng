import { HttpClient } from '@angular/common/http';
import { Product } from '../entity/product';
import { BaseEntityService } from './base-entity.service';

export class ProductService<E extends Product> extends BaseEntityService<E> {
  
  constructor(http: HttpClient){
      super(http);
  }
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseEntityService } from './base-entity.service';
import { SandwichSize } from '../entity/sandwich-size';

@Injectable()
export class SandwichSizeService extends BaseEntityService<SandwichSize>{

  constructor(http: HttpClient){
      super(http);
      this.resource = 'sandwich-size'
  }
}
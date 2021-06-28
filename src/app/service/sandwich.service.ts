import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sandwich } from '../entity/Sandwich';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable()
export class SandwichService {
  private apiServerUrl: string = environment.apiBaseUrl;
  private resource = 'sandwich';

  constructor(private http: HttpClient){
  }

  protected getUrl() {
    return `${this.apiServerUrl}/${this.resource}`;
  }

  public calculatePrice(sandwich: Sandwich): Observable<number> {
    return this.http.post<number>(`${this.getUrl()}/calculate-price`, sandwich);
  }

  public order(sandwich: Sandwich): Observable<Sandwich> {
    return this.http.post<Sandwich>(`${this.getUrl()}/order`, sandwich);
  }
}
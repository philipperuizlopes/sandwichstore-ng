import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseEntity } from '../entity/base-entity';

import { environment } from '../../environments/environment';

export class BaseEntityService<E extends BaseEntity> {
  private apiServerUrl = environment.apiBaseUrl;
  protected resource = '';

  constructor(protected http: HttpClient){
  }

  protected getUrl() {
    return `${this.apiServerUrl}/${this.resource}`;
  }

  public getAll(): Observable<E[]> {
    return this.http.get<E[]>(`${this.getUrl()}/all`);
  }

  public add(entity: E): Observable<E> {
    return this.http.post<E>(`${this.getUrl()}/add`, entity);
  }

  public update(entity: E): Observable<E> {
    return this.http.put<E>(`${this.getUrl()}/update`, entity);
  }

  public delete(entityId: number): Observable<void> {
    return this.http.delete<void>(`${this.getUrl()}/delete/${entityId}`);
  }
}
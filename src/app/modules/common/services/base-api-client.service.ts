import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export abstract class BaseApiClientService<Identifier, CreateModel, ViewModel, EditModel, > {

  private readonly root_path = "/api/"
  protected path = ""

  protected constructor(protected readonly httpClient: HttpClient) {
  }

  protected detail(identifier: Identifier): Observable<ViewModel> {
    return this.httpClient.get(`${this.root_path}${this.path}${identifier}`) as Observable<ViewModel>;
  }

  protected delete(identifier: Identifier): Observable<unknown> {
    return this.httpClient.delete(`${this.root_path}${this.path}${identifier}`) as Observable<unknown>;
  }

  protected create(data: CreateModel): Observable<unknown> {
    return this.httpClient.post(`${this.root_path}${this.path}`, {data}) as Observable<unknown>;
  }

  protected edit(data: EditModel): Observable<unknown> {
    return this.httpClient.put(`${this.root_path}${this.path}`, {data}) as Observable<unknown>;
  }
}

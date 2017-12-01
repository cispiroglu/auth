import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(private url: string, private http: Http) { }

  getAll() {
    return this.http.get(this.url).map(response => response.json()).catch(this.handleError);
  }

  get(Id) {
    return this.http.get(this.url + '/' + Id).map(response => response.json()).catch(this.handleError);
  }

  create(resource) {
    const headers = new Headers;
    if (!headers.has('content-type')) {
      headers.append('Content-Type', 'application/json');
    }
    return this.http.post(this.url + '/Post', JSON.stringify(resource),
      { headers: headers }).map(response => response.json()).catch(this.handleError);
  }

  update(resource) {
    const headers = new Headers;
    if (!headers.has('content-type')) {
      headers.append('Content-Type', 'application/json');
    }

    return this.http.put(this.url + '/Put', JSON.stringify(resource),
      { headers: headers }).map(response => response.json()).catch(this.handleError);
  }

  delete(Id) {
    return this.http.delete(this.url + '/Delete/' + Id)
      .map(response => response.json())
      .toPromise()
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.log('handleError');
    console.log(error.json());
    return Observable.throw(error.json());
    // if (error.status === 400) {
    //   return Observable.throw(new BadInput(error.json()));
    // }

    // if (error.status === 404) {
    //   return Observable.throw(new NotFoundError());
    // }

    // return Observable.throw(new AppError(error));
  }
}

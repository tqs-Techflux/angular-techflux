import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import {Product} from '../models/product';
import {Category} from '../models/category';
import {DomSanitizer} from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url = 'http://localhost:8080';

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }

  private formatErrors(error: any) {
    return  throwError(error.error);
  }

  populateProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.url.concat('/products/all')).pipe(catchError(this.formatErrors));;
  }

  populateCategories(): Observable<Category[]>{
    return this.http.get<Category[]>(this.url.concat('/categories/all')).pipe(catchError(this.formatErrors));
  }

  search(name: string): Observable<Product[]>{
    return this.http.get<Product[]>(this.url + '/products/query/' + name).pipe(catchError(this.formatErrors));
  }

  get(path: string, headers?: HttpHeaders): Observable<any> {
    return this.http.get(`${this.url}${path}`, { headers })
      .pipe(catchError(this.formatErrors));
  }

  getBlob(path: string, options: any): Observable<any>{
    return this.http.get(`${this.url}${path}`, options)
      .pipe(catchError(this.formatErrors));
  }

  post(path: string, body: any = {}): Observable<any> {
    return this.http.post(
      `${this.url}${path}`,
      body
    ).pipe(catchError(this.formatErrors));
  }

  put(path: string, body: any = {}): Observable<any> {
    return this.http.put(
      `${this.url}${path}`,
      body
    ).pipe(catchError(this.formatErrors));
  }

  delete(path): Observable<any> {
    return this.http.delete(
      `${this.url}${path}`
    ).pipe(catchError(this.formatErrors));
  }

}

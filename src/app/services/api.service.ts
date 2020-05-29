import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {catchError} from "rxjs/operators";
import {Observable, throwError} from "rxjs";
import {Product} from "../models/product";
import {Category} from "../models/category";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url: String = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  private formatErrors(error: any) {
    return  throwError(error.error);
  }

  populateProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.url.concat("/products/all")).pipe(catchError(this.formatErrors));
  }

  populateCategories(): Observable<Category[]>{
    return this.http.get<Category[]>(this.url.concat("/categories/all")).pipe(catchError(this.formatErrors));
  }

  search(name: String): Observable<Product[]>{
    return this.http.get<Product[]>(this.url+"/products/q="+name).pipe(catchError(this.formatErrors));
  }

  get(path: string, headers: HttpHeaders): Observable<any> {
    return this.http.get(`${this.url}${path}`, { headers: headers })
      .pipe(catchError(this.formatErrors));
  }

  post(path: string, body: Object = {}): Observable<any> {
    return this.http.post(
      `${this.url}${path}`,
      body
    ).pipe(catchError(this.formatErrors));
  }

}

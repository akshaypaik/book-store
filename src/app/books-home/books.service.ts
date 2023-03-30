import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private httpClient: HttpClient) {}

   
  public getBooksDetails():Observable<any>{
    const url = "https://www.googleapis.com/books/v1/volumes?q=kaplan%20test%20prep";
    return this.httpClient.get<any>(url);
  }
}

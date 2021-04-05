import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from 'rxjs/operators';
import { IProduct } from './product';

@Injectable({
    providedIn:'root'
})
export class ProductService 
{
  private productURL = 'api/products/products.json';
  
  constructor( private httpClient: HttpClient ) 
  {

  }

  getProducts(): Observable<IProduct[]>
  {
    return this.httpClient.get<IProduct[]>(this.productURL).pipe(
      tap(data => console.log("All", JSON.stringify(data))),
      catchError(this.handleError)
    );

  }

  handleError(errorResponse: HttpErrorResponse) 
  {
    let errorMessage: string = '';
    if ( errorResponse.error instanceof ErrorEvent) 
    {
      errorMessage = `An error occurred: ${errorResponse.error.message}`;
    } 
    else 
    {
      errorMessage = `Server returned code: ${errorResponse.status}, error message is: ${errorResponse.message}`
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OperationServiceService {

  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getSum(num1: number, num2: number): Observable<number> {
    let params = new HttpParams().set('num1', num1).set('num2', num2);
    return this.http.get<number>(`${this.apiUrl}/sum`, { params });
  }

  getSub(num1: number, num2: number): Observable<number> {
    let params = new HttpParams().set('num1', num1).set('num2', num2);
    return this.http.get<number>(`${this.apiUrl}/sub`, { params });
  }

  getMul(num1: number, num2: number): Observable<number> {
    let params = new HttpParams().set('num1', num1).set('num2', num2);
    return this.http.get<number>(`${this.apiUrl}/mul`, { params });
  }

  getDiv(num1: number, num2: number): Observable<number> {
    let params = new HttpParams().set('num1', num1).set('num2', num2);
    return this.http.get<number>(`${this.apiUrl}/div`, { params });
  }
}

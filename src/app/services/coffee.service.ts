import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {

  readonly apiUrl = 'https://ih-coffees-api-42e1df06199a.herokuapp.com/coffees';

  constructor(private http: HttpClient) { }


  getAllCoffees(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }
  getCoffeeById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  getRandomCoffee(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/random`);
  }

  createCoffee(coffeeData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/new`, coffeeData);
  }
  
}

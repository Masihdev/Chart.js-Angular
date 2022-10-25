import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class QuandleAPIService {
  constructor(private http: HttpClient) {}

  getChartData() {
    return this.http.get(`http://localhost:3000/sales`);
  }
}

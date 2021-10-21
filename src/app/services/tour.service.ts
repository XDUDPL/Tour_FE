import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Khachhang} from "../shared/model/khachhang";
import {Tour} from "../shared/model/Tour";
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class TourService {

  private apiUrl: string ='http://localhost:5000/tours';
  constructor(private http: HttpClient) { }
  getAll(): Observable<Tour[]>{
    return this.http.get<Tour[]>(this.apiUrl);
  }
  delete(khachhang: Khachhang): Observable<Khachhang>{
    const url = `${this.apiUrl}/${khachhang.id}`;
    return this.http.delete<Khachhang>(url);
  }
  update(khachhang: Khachhang): Observable<Khachhang>{
    const url = `${this.apiUrl}/${khachhang.id}`;
    return this.http.put<Khachhang>(url, khachhang, httpOptions);
  }
  create(khachhang: Khachhang): Observable<Khachhang>{
    return this.http.post<Khachhang>(this.apiUrl, khachhang, httpOptions);
  }
}

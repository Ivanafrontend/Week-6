import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor( private http: HttpClient ) { }
  
  getOnePost():Observable<any> {
    return this.http.get("http://localhost:3000/categories");
  }

}

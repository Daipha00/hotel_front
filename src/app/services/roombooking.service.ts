import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoombookingService {


  constructor(
    private http: HttpClient
  ) { }

  public url = 'localhost/'

  getroomdetail() :Observable<any>{
      return this.http.get<any>(`${this.url}`)
  }
}

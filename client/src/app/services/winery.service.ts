import { Winery } from './../model/winery';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WineryService {
url = 'http://localhost:4000/api/wineries/'

  constructor(private http: HttpClient) { }

  getWineries(): Observable<any> {

    return this.http.get(this.url);
  }

  deleteWinery(id: any): Observable<any> {
    return this.http.delete(this.url + id);
  }

  saveWinery(winery: Winery): Observable<any>{

    return this.http.post(this.url, winery)
  }

getWinery(id: string): Observable<any> {
  return this.http.get(this.url + id);
}

updateWinery(id: string, winery: Winery): Observable<any>{

return this.http.put(this.url + id, winery);

}

}

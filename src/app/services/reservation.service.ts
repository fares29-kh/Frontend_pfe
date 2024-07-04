import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  api = "https://localhost:7111/api"
  constructor(private http: HttpClient) { }

  addReservation(model: Reservation): Observable<any> {
    return this.http.post<Reservation>(this.api + "/Reservation/add", model)
  }
  getOwnerReservation(id: string): Observable<any> {
    return this.http.get(this.api + "/Reservation/owner/" + id)
  }
  updateReservation(id?: number, model?: Reservation): Observable<any> {
    return this.http.put<Reservation>(this.api + "/Reservation/" + id, model)
  }

 deleteReservation(id?: number): Observable<any> {
    return this.http.delete<Reservation>(this.api + "/Reservation/" + id)
  }
  getUserReservation(id: string): Observable<any> {
    return this.http.get(this.api + "/Reservation/client/"+ id)
  }
}

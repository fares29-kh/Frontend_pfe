import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { image } from '../models/reservation';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  api = "https://localhost:7111/api"
  constructor(private http: HttpClient) { }

  addImage(model: image): Observable<image> {
    return this.http.post<image>(this.api + "/Image", model)
  }

  getImagesByChambreId(id: number): Observable<image[]> {
    return this.http.get(this.api + "/chambre/images/" + id) as Observable<image[]>
  }

  getImagesByMaisonId(id: number): Observable<image[]> {
    return this.http.get(this.api + "/Maison/HomeImages/" + id) as Observable<image[]>
  }
}

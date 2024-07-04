import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from '../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  api = "https://localhost:7111/api"
  constructor(private http : HttpClient) { }

  getMessages(senderId : string , receiverId : string): Observable<Message[]>{
    return this.http.get(this.api+"/Message/user/"+senderId+"/"+receiverId) as Observable<Message[]>
  }

  sendMessage(model : Message):Observable<any>{
    return this.http.post<Message>(this.api+"/Message",model)
  }

  getContacts(userId : string): Observable<any>{
    return this.http.get(this.api+"/Message/contacts/"+userId)
  }
}

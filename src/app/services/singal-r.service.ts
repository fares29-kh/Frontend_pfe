import { Injectable } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr'
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SingalRService {
  private hubConnection !: HubConnection;
  private messageReceivedSubject : Subject<string> = new Subject<string>()
  public messageReceived$ = this.messageReceivedSubject.asObservable();
  
  constructor(  ) { }

  private createConnection(){
    this.hubConnection = new HubConnectionBuilder()
      .withUrl('')
      .build();
  }
  private startConnection(){
    this.hubConnection.start().catch(err => {console.error(err)})
  }
  public sendMessage(message : string){
    this.hubConnection.invoke('SendMessage',message)
  }
}

import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { Message } from 'src/app/models/reservation';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { ChatService } from 'src/app/services/chat.service';
import { SingalRService } from 'src/app/services/singal-r.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  // chambreId !: number
  receiverId !: string
  messageObject : Message = new Message()
  userId !: string
  messages : Message[]=[]
  userName !: string
  intervalId !: any
  contacts : any []=[]
  tmpContacts : any []=[]
  user_search !: string
  
  constructor(
    private activatedRoute : ActivatedRoute,
    private appservice: ApiServiceService,
    private messageService : ChatService,
    private signalRService : SingalRService
    ) { }

    @HostListener('document:keydown',['$event'])
    sendMessageEvent(event : KeyboardEvent){
      if(event.key == "Enter"){
        if(this.messageObject.text){
          this.sendMessage()
        }
      }
    }

  ngOnInit(): void {
    const decoded_token: any = jwtDecode(this.getCookie("token"));
    this.userId = decoded_token["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"]
    this.getContacts();
    this.activatedRoute.params.subscribe(
      data => {
        this.receiverId = data['id']
        this.getAllMessages(this.userId,this.receiverId)
        this.getUserInfo()   
      }
    )
    this.intervalId = setInterval(()=>{
      this.getAllMessages(this.userId,this.receiverId)
    },5000)
  }

  searchUser(){
    if(!this.user_search || this.user_search.length == 0){
      this.contacts = this.tmpContacts
    }else {
      this.contacts=[]
      this.tmpContacts.forEach(el=>{
        if(el?.userName.toLocaleUpperCase().indexOf(this.user_search.toLocaleUpperCase()) != -1){
          this.contacts.push(el)
        }
      })
    }
  }

  openChat(id : string){
    this.receiverId = id
    this.getAllMessages(this.userId,this.receiverId)
    this.getUserInfo()
  }

  getContacts(){
    this.messageService.getContacts(this.userId).subscribe(
      data => {
        this.contacts = data
        this.tmpContacts = this.contacts
      }
    )
  }


  getUserInfo(){
    this.appservice.getUserInfo(this.receiverId).subscribe(
      data => {
        this.userName = data.userName
      }
    )
  }
 
  getAllMessages(senderId : string,receiverId : string){
    this.messageService.getMessages(senderId,receiverId).subscribe(
      data =>{
        this.messages = data
      }
    )
  }

  sendMessage(){
    this.messageObject.userId = this.userId
    this.messageObject.userName = this.receiverId
    this.messageObject.date = new Date()
    this.messageService.sendMessage(this.messageObject).subscribe(
      data => {
        this.getAllMessages(this.userId,this.receiverId)
        this.messageObject.text = ""
      }
    )
  }

  getCookie(name: string): string {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith(name + '=')) {
        return cookie.substring(name.length + 1);
      }
    }
    return '';
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  getUserInfo(userId : string): Observable<any>{
    return this.http.get("https://localhost:7111/api/User/user/"+userId)
  }

  ////////////////////    Authentification    ///////////////////
  registeruser(data: any) {
    let myData = this.http.post<any>('https://localhost:7111/auth/register', data);
    return myData;
  }

  loginuser(data: any) {
    let myData = this.http.post<any>('https://localhost:7111/auth/login', data);
    return myData;
  }



  ///////////////////////////////////////// chambre


  GetAllChambre(): any {
    let myData = this.http.get<any>('https://localhost:7111/api/Chambre');
    return myData;
  }

  AddChambre(data: any) {
    let myData = this.http.post<any>('https://localhost:7111/api/Chambre', data);
    return myData;
  }

  DeleteChambre(data: any) {
    let myData = this.http.delete<any>('https://localhost:7111/api/Chambre/' + data);
    return myData;
  }
  DeleteUser(data: any) {
    let myData = this.http.delete<any>('https://localhost:7111/api/User/' + data);
    return myData;
  }
  
  DeleteCommentaire(data: any) {
    let myData = this.http.delete<any>('  https://localhost:7111/api/Commentaire/' + data);
    return myData;
  }
  GetChambrebyid(data: any) {
    let myData = this.http.get<any>('https://localhost:7111/api/Chambre/' + data);
    return myData;
  }

  GetChambrebyUserid(data:any){
    let myData =  this.http.get<any>('https://localhost:7111/api/Chambre/user?Id='+data);
     return myData;
   }
  // ////////////////////  maison
  GetAllHouses(): any {
    let myData = this.http.get<any>('https://localhost:7111/api/Maison');
    return myData;
  }

  AddHouse(data: any) {
    let myData = this.http.post<any>('https://localhost:7111/api/Maison', data);
    return myData;
  }

  Getmaisonbyid(data: any) {
    let myData = this.http.get<any>('https://localhost:7111/api/Maison/' + data);
    return myData;
  }
  GetHousebyid(data: any) {
    let myData = this.http.get<any>('https://localhost:7111/api/Maison/user?Id=' + data);
    return myData;
  }

  DeleteMaison(data: any) {
    let myData = this.http.delete<any>('https://localhost:7111/api/Maison/' + data);
    return myData;
  }

  ///////////////////////// destination

  GetAllDestinations(): any {
    let myData = this.http.get<any>('https://localhost:7111/api/Destination');
    return myData;
  }

  AddDestination(data: any) {
    let myData = this.http.post<any>('https://localhost:7111/api/Destination', data);
    return myData;
  }


  ///////////////////  Users
  GetAllUsers(): any {
    let myData = this.http.get<any>('https://localhost:7111/api/User/listUser');
    return myData;
  }

  GetAllOwners(): any {
    let myData = this.http.get<any>('https://localhost:7111/api/User/listOwner');
    return myData;
  }
//////////////////////////Commentaire
AddCommentaire(data:any){
  let myData =  this.http.post<any>('https://localhost:7111/api/Commentaire',data);
   return myData;
 }


 GetAllCommentaire(){
  let myData =  this.http.get<any>('https://localhost:7111/api/Commentaire');
   return myData;
 }
 GetCommentairebyidRoom(data:any){
  let myData =  this.http.get<any>(' https://localhost:7111/api/Commentaire/Room/'+data);
   return myData;
 }


 GetCommentairebyidHouse(data:any){
  let myData =  this.http.get<any>('https://localhost:7111/api/Commentaire/House/'+data);
   return myData;
 }


  /////////////////////// statistique


  Getstat(): any {
    let myData = this.http.get<any>('https://localhost:7111/api/Maison/stat');
    return myData;
  }
  Getnombremaison(): any {
    let myData = this.http.get<any>('https://localhost:7111/api/Maison/nombremaison');
    return myData;
  }
  Getnombrechambre(): any {
    let myData = this.http.get<any>('https://localhost:7111/api/Maison/nombrechambre');
    return myData;
  }


  GetUserstat(): any {
    let myData = this.http.get<any>('https://localhost:7111/api/User/countUsersByRole');
    return myData;
  }
  GetStat2(): any {
    let myData = this.http.get<any>('https://localhost:7111/api/Maison/stat2');
    return myData;
  }

}
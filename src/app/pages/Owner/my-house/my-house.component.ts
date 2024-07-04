import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { image } from 'src/app/models/reservation';
import { ImagesService } from 'src/app/services/images.service';
@Component({
  selector: 'app-my-house',
  templateUrl: './my-house.component.html',
  styleUrls: ['./my-house.component.css']
})
export class MyHouseComponent implements OnInit {
public  homelists:any;
public Houseslists: any;
showModal: boolean = false
display: string = "none"
houseId!: number
userId !: string
k :any
images: image[] = []
imageObject: image = new image()
public maison:any={
  nomMaison: '',
  adresse: '',
  ville: '',
  description: '',
  lienCarte: '',
  lienVideo: '',
  categorie: '',
  nbrAdulte: 0,
  nbrEnfant:0,
  prix: 0,
  userId:'',
};
  constructor(private appservice: ApiServiceService, 
    private router: Router,private imageService:ImagesService) { }

  ngOnInit(): void {
    

    const decoded_token: any = jwtDecode(this.getCookie("token"));
    this.userId = decoded_token["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"]
    console.log(this.userId)
    this.getmaisonbyid(this.userId);
    
  }
  openModal() {
    this.display = "block";
    // this.houseId = id
  }
  onCloseHandled() {
    this.display = "none";
  }
  
   submit() {
    this.maison.userId= this.userId

    this.appservice.AddHouse(this.maison).subscribe(
      data => {
        this.images.forEach(el => {
          el.maisonId = data.id
          el.titre = "image de " + data.nomMaison
          this.imageService.addImage(el).subscribe(
            data => {
              this.onCloseHandled();
              this.getmaisonbyid(this.userId);

            }
          )
        })
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
  picked(event: any) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const file: File = fileList[0];
      this.handleInputChange(file);
    }
  }
  handleInputChange(files: any) {
    const file = files;
    const pattern = /image-*/;
    const reader = new FileReader();
    reader.onloadend = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }
  async _handleReaderLoaded(e: any) {
    this.imageObject.data = e.target.result
    this.images.push(this.imageObject)
    this.imageObject = new image()
  }
  addmaison(){
    this.appservice.AddHouse(this.maison).subscribe((result)=>{
      console.warn()
  
    })
  }

  getmaisonbyid(id:any){
    this.appservice.GetHousebyid(id).subscribe((result: any) => {
      this.homelists = result;
      console.log(result);
    })
  }

  deletemaison(data:any){

    this.appservice.DeleteMaison(data).subscribe(
      ()=>{
        this.getmaisonbyid(this.userId);
      }
     );
}
  
}

import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-commentaire',
  templateUrl: './commentaire.component.html',
  styleUrls: ['./commentaire.component.css']
})
export class CommentaireComponent implements OnInit {
  public Commentairelists:any;
  constructor(private appservice:ApiServiceService) { }

  ngOnInit(): void {
    this.gettouscommentaire();
  }
gettouscommentaire(){
  this.appservice.GetAllCommentaire().subscribe(
    (result:any)=>{
      this.Commentairelists=result;
      console.log(result);
    }
  )
}

deleteroom(data:any){

  this.appservice.DeleteCommentaire(data).subscribe(
    ()=>{
      this.gettouscommentaire();
    }
   );
}
}

import { Component, OnInit } from '@angular/core';
import { freeApiService } from '../services/freeapi.service';
import { Comments } from '../classes/comments';
import { Posts } from '../classes/posts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  Istcomment:Comments[];
  Istpost:Posts[];
  ThreeComment:Comments[];

  constructor(private _freeApiservice:freeApiService) { }

  ngOnInit() {
    this._freeApiservice.getcomments()
      .subscribe(
        data=>
        {   
          this.Istcomment = data;
          console.log(this.Istcomment=data);
        }
      );

      this._freeApiservice.getpostCommment()
      .subscribe(
        data=> {
          this.Istpost = data;
          console.log(this.Istpost=data);
        }
      )
      
    this._freeApiservice.getuserthreeCommments()
    .subscribe(
      data=>{
        this.ThreeComment =data;
        console.log(this.ThreeComment=data);;
      }
    )

  }

}

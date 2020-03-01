import { Component, OnInit } from '@angular/core';
import { Albums } from "../classes/albums";
import { freeApiService } from "../services/freeapi.service";

@Component({
  selector: 'album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.scss']
})
export class AlbumDetailsComponent implements OnInit {

  NewAlbums:Albums[];

  constructor(private _freeApiService:freeApiService) { }

  ngOnInit() {
    this._freeApiService.getalbumDetails().subscribe( data=> {
        this.NewAlbums = data;
        console.log(this.NewAlbums);
      }
    ) 
  }

}

import { Component } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  moduleId: module.id,
  selector: 'search',
  templateUrl: 'search.component.html',
})
export class SearchComponent  { 

  constructor(private _spotifyService: SpotifyService){}

  searchStr: string;
  searchMusic(){
    this._spotifyService.searchSong(this.searchStr).subscribe( res => {
      console.log(res.artists.items);
    });
  }
 }

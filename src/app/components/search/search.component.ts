import { Component } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';
import { Artist} from '../../models/artist';


@Component({
  moduleId: module.id,
  selector: 'search',
  templateUrl: 'search.component.html',
})
export class SearchComponent  { 

  constructor(private _spotifyService: SpotifyService){}

  searchStr: string;
  searchRes: Artist[];
  searchMusic(){
    this._spotifyService.searchSong(this.searchStr).subscribe( res => {
      this.searchRes = res.artists.items;
    });
  }
 }

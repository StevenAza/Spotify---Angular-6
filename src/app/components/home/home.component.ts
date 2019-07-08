import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  album: any[] = [];
  constructor( private spotify: SpotifyService ) {
    spotify.getReleases().subscribe((data:any)=>{
      this.album = data.albums.items;
      console.log(this.album);
  });
   }

  ngOnInit() {
    
  }

}

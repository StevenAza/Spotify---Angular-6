import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from 'src/app/services/spotify.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  show: boolean = true;
  album: any[] = [];
  constructor( private spotify: SpotifyService, private route: Router ) {
    spotify.getReleases().subscribe((data:any)=>{
      this.album = data;
      this.show = false;
    },error=>{
        console.log("EL ERROR ES:", error)
        console.log("TOKEN -- HOME: ERROR",localStorage.getItem("token"))
        this.route.navigate(['login']);
      });
   }

  ngOnInit() {
    
  }

}

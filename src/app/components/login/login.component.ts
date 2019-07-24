import { Component, OnInit } from '@angular/core';
import { SpotifyService } from "spotify";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private spotify: SpotifyService) { 
    
  }

  ngOnInit() {
    localStorage.clear();
  }
  login(){
    this.spotify.login();
  }

}

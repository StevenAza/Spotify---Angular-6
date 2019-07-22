import { Component, OnInit } from '@angular/core';
import { Router  } from '@angular/router'
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-checkcredentials',
  templateUrl: './checkcredentials.component.html',
  styleUrls: ['./checkcredentials.component.scss']
})
export class CheckcredentialsComponent implements OnInit {
  
  constructor(private route: Router, private spotify: SpotifyService) { 
  
  }

  ngOnInit() {
    if(!localStorage.getItem('token')){
      localStorage.setItem("token",location.href.split("#")[1].split("=")[1].split("&")[0]);   
      setInterval(()=>{
        location.href= "/inicio";
        console.log("HOME------NO HABIA TOKEN")
      },500)
      
    }else{
      console.log("YA HAY UN TOKEN", localStorage.getItem("token"))
      location.href= "/inicio";
    }
 
  }

}

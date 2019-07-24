import { Component, OnInit } from '@angular/core';
import { SpotifyService } from  'spotify'
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  Perfil: any[] = [];
  constructor(private spotify: SpotifyService, private rout: Router) { 
    this.spotify.geProfile().subscribe((data:any[]) => {
      this.Perfil = data;
      console.log(this.Perfil);
    },error => {
        // LLAMO EL SERVICIO QUE REFRESCA EL TOKEN
          //this.rout.navigate(['/login']);
    });
  
  }

  ngOnInit() {
 
   
  }
  log_out(){
      localStorage.clear();
      this.rout.navigate(['/login']);
  }

}

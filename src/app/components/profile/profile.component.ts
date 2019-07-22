import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  Perfil: any[] = [];
  constructor(private spotify: SpotifyService, private rout: Router) { 
  }

  ngOnInit() {
    this.spotify.geProfile().subscribe((data:any) => {
      this.Perfil = data;
      console.log(this.Perfil);
    },error => {
        // LLAMO EL SERVICIO QUE REFRESCA EL TOKEN
          //this.rout.navigate(['/login']);
    });
   
  }
  log_out(){
      localStorage.clear();
      this.rout.navigate(['/login']);
  }

}

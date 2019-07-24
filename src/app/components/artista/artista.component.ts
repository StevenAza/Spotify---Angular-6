import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'spotify';
import { ActivatedRoute, Router  } from '@angular/router';
@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: [ './artista.scss' ] 
})
export class ArtistaComponent implements OnInit {
  tracks : any[] = [];
  album  : any[] = [];
  idAlbum: string;
  modal: boolean = false;
  constructor(private servicio: SpotifyService, private router: ActivatedRoute, private loc: Router) {
        //  TRACKS
          this.router.params.subscribe( params => {
        servicio.getTracks(params['id']).subscribe(data =>{
             this.tracks = data;
             console.log(this.tracks);
        },error=>{
            this.loc.navigate(['/login']);
        });

        // ALBUM
        servicio.getAlbumById(params["id"]).subscribe((albumdata:any[])=>{
            this.album = albumdata;
            this.idAlbum = albumdata["id"];
            console.log(this.album);
        });
      });
   }

  ngOnInit() {
  }
  seguirAlbum(){
    this.servicio.saveAlbum(`https://api.spotify.com/v1/me/albums?ids=${this.idAlbum}`, [this.idAlbum]).subscribe(data=>{
      this.modal = true;
    }, error=>{
      console.log("Hay un error----", error)
    })
  }
}

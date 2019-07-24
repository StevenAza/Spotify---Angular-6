import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'spotify';
@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.component.html',
  styleUrls: ['./biblioteca.component.scss']
})
export class BibliotecaComponent implements OnInit {
  biblioteca: any[] = [];
  constructor(private sspotify: SpotifyService) {
    sspotify.getallAlbum().subscribe(data=>{
      this.biblioteca = data;
      console.log(data);
    })
   }

  ngOnInit() {
  }

}

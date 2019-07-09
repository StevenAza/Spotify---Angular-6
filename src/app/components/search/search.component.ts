import { Component, OnInit } from '@angular/core';
import {  SpotifyService } from '../../services/spotify.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent{
  resp: any[] = [];
  show: boolean = false;
  constructor(private spotify: SpotifyService) { 
  }

  // METODO PARA BUSCAR 
  Buscar(termino: string){
    this.show = true;
    this.spotify.getSearch(termino).subscribe((data:any)=>{
      this.resp = data;
      this.show = false;
    })
  }
}

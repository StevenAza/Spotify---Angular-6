import { Component, OnInit } from '@angular/core';
import {  SpotifyService } from '../../services/spotify.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent{
  resp: any[] = [];
  show: boolean = false;
  constructor(private spotify: SpotifyService, private route: Router) { 
  }

  // METODO PARA BUSCAR 
  Buscar(termino: string){
    if(termino){
      this.show = true;
      this.spotify.getSearch(termino).subscribe((data:any)=>{
        this.resp = data;
        this.show = false;
      }, error=>{
          this.route.navigate(['/login']);
      })
    }
  }
}

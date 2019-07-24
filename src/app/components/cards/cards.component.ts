import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit{
  @Input() albumi: any[] = [];
  list: boolean = false;
  constructor(private route: Router) { 
 
  }
  verAlbum(idalbum){
      this.route.navigate(['/artista/' , idalbum]);
  }
  ngOnInit(){
    
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private ht: HttpClient) {
     
   }

   
  peticiones(query:string){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQA3sCrGzrZfp7j66RGE7HldJw3ON14kBYne6o1ylYkHtlgKjmerNM0mbVgrPHemTqckL6lZbgnIwJ9g1Bo'
    });
    const url = `https://api.spotify.com/v1/${query}`;
    return this.ht.get(url, {headers})
  }


   getReleases(){
    
    return this.peticiones('browse/new-releases?country=co&limit=20').
     pipe(map(data=>{
        return data['albums'].items;
     }));
   }

   getSearch(param){
    return this.peticiones(`search?q=${ param }&type=album`).pipe(map(data=>{
        console.log(data);
          return data['albums'].items;
          
     }));

   }
}

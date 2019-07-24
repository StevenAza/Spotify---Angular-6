import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
   token: string;
   error: boolean;
   description: any;
   constructor(private ht: HttpClient) {

   }
   peticiones(query:string){
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem("token")}`
      });
      const url = `https://api.spotify.com/v1/${query}`;
      return this.ht.get(url, {headers});
   }
   getReleases(){
    return this.peticiones('browse/new-releases?country=co&limit=20').
     pipe(map(data=>{
        return data['albums'].items;
     }));
   }
   getSearch(param){
    return this.peticiones(`search?q=${ param }&type=album`).pipe(map(data=>{
       
          return data['albums'].items;
          
     }));
   }
   getallAlbum(){
     return this.peticiones('me/albums').pipe(map(data =>{

       return data["items"];
     }))
   }
   getTracks(idAlbum){
    return this.getAlbumById(idAlbum).pipe(map(data=>{
      return data["tracks"].items;
    }))
   }
   getAlbumById(idA){
    return this.peticiones(`albums/${idA}`).pipe(map(data=>{
      return data;
    }));
   }

   geProfile(){
     return this.peticiones('me');
   }
   login(){
     const clientid: string = encodeURIComponent("e43fc0cbd5764ca192350e967f412f7b");
     const scopes: string = "user-read-private%20user-library-modify%20user-library-read%20user-read-email";
     const redirecturi = encodeURIComponent("http://localhost:4200/check/callback");
     location.href= `https://accounts.spotify.com/authorize?response_type=token&client_id=${clientid}&scope=${scopes}&redirect_uri=${redirecturi}&state=34fFs29kd09`;
  // console.log(`https://accounts.spotify.com/authorize?response_type=token&client_id=${clientid}&scope=${scopes}&redirect_uri=${redirecturi}`);
   }
   saveAlbum(url,parametros:any){
     const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem("token")}}`,
      'Content-Type': 'application/json'
     });
     return this.ht.put(url,parametros,{headers});
   }
}


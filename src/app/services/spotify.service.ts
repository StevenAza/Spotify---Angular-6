import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private ht: HttpClient) {
     
   }
   getReleases(){
      const headers = new HttpHeaders({
        'Authorization': 'Bearer BQAfEbqxUOuKqSFL4KZSXnRY0FyTwONT_fj6TREJAxp_V1RNobrvs9Tz-YlkNzYY8wo6wfNv8CE5DLSYmvs'
      });
     return this.ht.get('https://api.spotify.com/v1/browse/new-releases?country=co&limit=20', {headers});
   }
}

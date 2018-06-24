import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// map me sirve para filtrar la data de la API
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) { }

  getQuery(query: string) {

    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      // tslint:disable-next-line:max-line-length
      'Authorization': 'Bearer BQDx3oy_6P7OAurO1L-Mx3bv8eL2bOkJjXy7Tb-8ubwRmaUFzrvFre5w2B2uPshfdrPn13POwqgzkmztHKg'
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {

    return this.getQuery('browse/new-releases')
      .pipe( map( data => data['albums'].items ) );
  }

  getArtistas(termino: string) {

    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
      .pipe( map( data =>  data['artists'].items ) );
  }

  getArtista(id: string) {
    return this.getQuery(`artists/${id}`);
  }
}

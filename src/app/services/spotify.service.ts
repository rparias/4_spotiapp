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
      'Authorization': 'Bearer BQCOwKwdg7sHHZlGWpCr6xnZwtn5REFtP2LOLzgFOTOXlUC84v5GhpIKUs27suNwh1axDwpXpGtUEgQgunA'
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {

    return this.getQuery('browse/new-releases')
      .pipe( map( data => data['albums'].items ) );
  }

  getArtista(termino: string) {

    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
      .pipe( map( data =>  data['artists'].items ) );
  }
}

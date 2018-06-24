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
      'Authorization': 'Bearer BQCPRPd0GoeVb0ZOfLIr2EYcrC6kd5CXUIS5aGtJNT_MlWwXqdQ30tMl1rCSda6rkSfKYNGfS3Qjs4qTPmA'
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

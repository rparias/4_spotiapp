import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// map me sirve para filtrar la data de la API
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) { }

  getNewReleases() {

    const headers = new HttpHeaders({
      // tslint:disable-next-line:max-line-length
      'Authorization': 'Bearer BQBxVCumCHSv2tgPldS9hlBqcnDIRk_6qDOI2wzXcRyJbOZYjxgJQ4qrPiWYXkL9_nm0JkqP_vZoZ_llkCYPghLtAteIGadlhWxayEVsr7URvJg1J2xlBxmUuTErwgK4JR2ZGscVZZ7DPSYi'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
        .pipe( map( data => data['albums'].items ) );
  }

  getArtista(termino: string) {
    const headers = new HttpHeaders({
      // tslint:disable-next-line:max-line-length
      'Authorization': 'Bearer BQBxVCumCHSv2tgPldS9hlBqcnDIRk_6qDOI2wzXcRyJbOZYjxgJQ4qrPiWYXkL9_nm0JkqP_vZoZ_llkCYPghLtAteIGadlhWxayEVsr7URvJg1J2xlBxmUuTErwgK4JR2ZGscVZZ7DPSYi'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, { headers })
        .pipe( map( data =>  data['artists'].items ) );
  }
}

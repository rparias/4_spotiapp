import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) { }

  getNewReleases() {

    const headers = new HttpHeaders({
      // tslint:disable-next-line:max-line-length
      'Authorization': 'Bearer BQApnWxn-013D-2P6rp0JAuy6v80fxhXAyteFvkmTdloGR8ku2cXatJ5BvSrWikx1Rc9cRFLU6exnjWcX1BEtGp3S_UXb_44vNQApXd6-XXiB7B6zhoGhPFwPf_n-bJD2V8hMLJKOhsWLUV1'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
  }
}

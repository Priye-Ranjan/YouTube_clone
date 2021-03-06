import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class VideosService {
  constructor(private http: HttpClient) {}

  // getTrending(): Observable<any> {
  //   return this.http.get(
  //     'https://youtube.googleapis.com/youtube/v3/search?part=snippet&location=22.5937%2C75.9629&locationRadius=500km&regionCode=IN&type=video&maxResults=20&key=AIzaSyC5a7O9o1R3o-Uql0V8FrviKe7OEGW5Fns'
  //   );
  // }

  Search(str: string): Observable<any> {
    return this.http.get(
      'https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=' +
        str +
        '&type=video&maxResults=40&key=AIzaSyC5a7O9o1R3o-Uql0V8FrviKe7OEGW5Fns'
    );
  }
  getVideoById(str: string): Observable<any> {
    return this.http.get(
      'https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=' +
        str +
        '&type=video&maxResults=40&key=AIzaSyC5a7O9o1R3o-Uql0V8FrviKe7OEGW5Fns'
    );
  }
}
// 'https://api.edamam.com/search?q=' +
//   str +
//   '&app_id=1700a8ca&app_key=8db3419cccbc43d21c5bae923f055060'

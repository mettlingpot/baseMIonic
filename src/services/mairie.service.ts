import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class MairieService {

  constructor(private http: Http) {

  }
getData() {
    return this.http.get("assets/data/mairie.json")
        .map((res:Response) => res.json().mairie); 
  }
}

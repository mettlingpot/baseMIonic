import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class AnnonceurService {

  constructor(private http: Http) {

  }
getData(recherche) {
    return this.http.get("assets/data/"+ recherche +".json")
        //a faire:trouver comment changer .annonceur par recherche..
        //afin de regrouper les services
        .map((res:Response) => res.json().annonceurs);
        
  }
}

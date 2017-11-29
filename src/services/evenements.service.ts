import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class EvenementsService {

  constructor(private http: Http) {

  }

getData() {
    return this.http.get("assets/data/evenements.json")
        .map((res:Response) => res.json().evenements);
        
  }
}

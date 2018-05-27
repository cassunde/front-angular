import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { People } from './People';

@Injectable({
  providedIn: 'root'
})
export class PeoplesService {
  constructor(private http: Http) {}

  getPessoas(): Promise<People[]> {
    return this.http.get('http://localhost:8080/cadastro-pessoas/service/peoples').toPromise()
    .then(response => {
      return response.json() as People[];
    });
  }

  savePeople(people: People): Promise<People> {
    const cabe = new Headers();
    cabe.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:8080/cadastro-pessoas/service/peoples', people, { headers: cabe }).toPromise()
    .then(response => {
      return response.json() as People;
    });
  }
}

import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { People } from './model/People';
import { PeopleNumber } from './model/PeopleNumber';

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

  getPeople(id: String): Promise<People> {
    return this.http.get(`http://localhost:8080/cadastro-pessoas/service/peoples/${id}`).toPromise()
    .then(response => {
      return response.json() as People;
    });
  }

  removePeople(id: number): Promise<String> {
    return this.http.delete(`http://localhost:8080/cadastro-pessoas/service/peoples/${id}`).toPromise()
    .then(response => {
      return response.json() as String;
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

  saveNumber(phone: PeopleNumber): Promise<PeopleNumber> {
    const cabe = new Headers();
    cabe.append('Content-Type', 'application/json');
    return this.http.post(`http://localhost:8080/cadastro-pessoas/service/peoples/${phone.people}/phones/`, phone, { headers: cabe }).toPromise()
    .then(response => {
      return response.json() as PeopleNumber;
    });
  }
}

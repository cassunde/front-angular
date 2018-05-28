import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { log } from 'util';
import { PeoplesService } from '../peoples.service';
import { People } from '../model/People';
import { Router, ActivatedRoute } from '@angular/router';
import { PeopleNumber } from '../model/PeopleNumber';

@Component({
  selector: 'app-peoples-register',
  templateUrl: './peoples-register.component.html',
  styleUrls: ['./peoples-register.component.css']
})
export class PeoplesRegisterComponent implements OnInit {

  people: People = new People();
  numberSelected: PeopleNumber = new PeopleNumber();
  numbers: PeopleNumber[] = [];

  id: String;

  constructor(private service: PeoplesService, private router: Router, private par: ActivatedRoute) {
    this.people.id = 0;
    this.people.name = '';
    this.people.email = '';
    this.people.cpf = '';

    this.numberSelected.id = 0;
    this.numberSelected.ddd = '';
    this.numberSelected.number = '';

  }

  salvar() {
    this.service.savePeople(this.people).then(res => this.done());
  }

  salvarNumber() {
    this.numberSelected.people = this.people.id;
    this.service.saveNumber(this.numberSelected).then( res => this.numbers.push( res ) );
  }

  done() {
    this.router.navigate(['']);
  }

  createNumbresByPeople() {
    const phones: any[] = this.people.phones;
    for (const key in phones) {
      if (phones.hasOwnProperty(key)) {
        const item = phones[key];
        const phone: PeopleNumber = new PeopleNumber();
        phone.id = item.id;
        phone.ddd = item.ddd;
        phone.number = item.number;
        phone.people = this.people.id;

        this.numbers.push( phone );
      }
    }
  }

  ngOnInit() {
    this.par.params.subscribe((  params: any ) => {
      this.id = params.id;
      if (this.id !== undefined){
        this.service.getPeople(this.id).then( res  =>  {
          this.people = res ;
          this.createNumbresByPeople();
        }  );
      }
    });
  }
}

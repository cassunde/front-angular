import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { log } from 'util';
import { PeoplesService } from '../peoples.service';
import { People } from '../People';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-peoples-register',
  templateUrl: './peoples-register.component.html',
  styleUrls: ['./peoples-register.component.css']
})
export class PeoplesRegisterComponent implements OnInit {

  people: People = new People();

  id: String;

  constructor(private service: PeoplesService, private router: Router, private par: ActivatedRoute) {
    this.people.id = 0;
    this.people.name = '';
    this.people.email = '';
    this.people.cpf = '';
  }

  salvar() {
    this.service.savePeople(this.people);
    this.router.navigate(['']);
  }

  ngOnInit() {
    this.par.params.subscribe(
      (  params: any ) => { this.id = params.id; }
  }
}

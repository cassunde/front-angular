import { Component, OnInit } from '@angular/core';
import { PeoplesService } from '../peoples.service';
import { People } from '../model/People';
import { Router } from '@angular/router';

@Component({
  selector: 'app-peoples-list',
  templateUrl: './peoples-list.component.html',
  styleUrls: ['./peoples-list.component.css']
})
export class PeoplesListComponent implements OnInit {

  peoples: People[];

  constructor(private peopleService: PeoplesService, private router: Router) {
    this.updateList();
   }

   updateList() {
    this.peopleService.getPessoas().then( res => {
      this.peoples = res ;
    } );
   }
   newPeople(id: number) {
    this.router.navigate([`/new`]);
   }
   edit(id: number) {
    this.router.navigate([`/edit/${id}`]);
   }
   remove(id: number) {
    this.peopleService.removePeople( id );
   }
  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { PeoplesService } from '../peoples.service';
import { People } from '../People';

@Component({
  selector: 'app-peoples-list',
  templateUrl: './peoples-list.component.html',
  styleUrls: ['./peoples-list.component.css']
})
export class PeoplesListComponent implements OnInit {

  peoples: People[];

  constructor(private peopleService: PeoplesService) {
    this.updateList();
   }

   updateList() {
    this.peopleService.getPessoas().then( res => {
      this.peoples = res ;
    } );
   }
  ngOnInit() {
  }

}

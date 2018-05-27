import { Component, OnInit } from '@angular/core';
import {  PeoplesService } from './peoples.service';

@Component({
  selector: 'app-peoples',
  templateUrl: './peoples.component.html',
  styleUrls: ['./peoples.component.css']
})
export class PeoplesComponent implements OnInit {

  nomeSistema: string;


  constructor() {}
  ngOnInit() {
  }

}

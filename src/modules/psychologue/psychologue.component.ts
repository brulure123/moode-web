import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-psychologue',
  templateUrl: './psychologue.component.html',
  styleUrls: ['./psychologue.component.scss']
})
export class PsychologueComponent implements OnInit {

  sidebarOpen = true;

  constructor() { }

  ngOnInit(): void {
  }

  sidebarToggler(event): void {
    this.sidebarOpen = !this.sidebarOpen;
  }

}

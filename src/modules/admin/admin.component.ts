import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  sidebarOpen = true;

  constructor() { }

  ngOnInit(): void {
  }

  sidebarToggler(event): void {
    this.sidebarOpen = !this.sidebarOpen;
  }


}

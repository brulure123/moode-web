import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-psychologue',
  templateUrl: './psychologue.component.html',
  styleUrls: ['./psychologue.component.scss']
})
export class PsychologueComponent implements OnInit {

  sidebarOpen = true;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.data.psychologue);
  }

  sidebarToggler(event): void {
    this.sidebarOpen = !this.sidebarOpen;
  }

}

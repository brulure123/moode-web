import { Component, OnInit } from '@angular/core';
import { Client } from 'src/models/client.model';

@Component({
  selector: 'app-widget-table',
  templateUrl: './widget-table.component.html',
  styleUrls: ['./widget-table.component.scss']
})
export class WidgetTableComponent implements OnInit {

  displayedColumns = ['imgsrc', 'nom', 'prenom', 'email'];
  mesDerniersPatiens: Client[] = [
    {
      id: 'string',
      email: 'benraj.200@gmail.com',
      password: 'string',
      nom: 'Zongwe Benoni',
      prenom: 'Benjamin',
      pseudo: 'string',
      genre: 'string',
      role: 'string',
      status: true,
      imgsrc: 'string',
      idPsychologue: 'string'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

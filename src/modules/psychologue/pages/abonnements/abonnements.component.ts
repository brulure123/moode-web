import { Component, OnInit } from '@angular/core';
import { Client } from 'src/models/client.model';

@Component({
  selector: 'app-abonnements',
  templateUrl: './abonnements.component.html',
  styleUrls: ['./abonnements.component.scss']
})
export class AbonnementsComponent implements OnInit {

  displayedColumns = ['imgsrc', 'nom', 'prenom', 'email', 'genre', 'status', 'actions'];
  nouveauxAbonnements: Client[] = [
    {
      id: 'string',
      email: 'string',
      password: 'string',
      nom: 'string',
      prenom: 'string',
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
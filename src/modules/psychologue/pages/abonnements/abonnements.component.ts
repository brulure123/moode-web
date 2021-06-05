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
      email: 'benraj.200@gmail.com',
      password: '23617252',
      nom: 'Zongwe',
      prenom: 'Benoni',
      pseudo: 'angular',
      genre: 'M',
      role: 'PSY',
      status: true,
      imgsrc: 'image',
      idPsychologue: '1'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
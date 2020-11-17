import { Component, OnInit } from '@angular/core';
import { Article } from '../../../../models/article';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  articles: Article[] =  [];

  constructor() { }

  ngOnInit(): void {
    this.articles = Array.of(
      new Article(1, 'Hello World de test par l\'administrateur.', 'src/img', 'Ceci est un article de test du bon fonctionnement de l\'application, c\'est complètement technique.', '50'),
      new Article(1, 'Hello World de test par l\'administrateur.', 'src/img', 'Ceci est un article de test du bon fonctionnement de l\'application, c\'est complètement technique.', '50')
    );
  }
}

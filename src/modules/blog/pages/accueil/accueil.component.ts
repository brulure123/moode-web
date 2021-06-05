import { Component, OnInit } from '@angular/core';
import { Article } from 'src/models/article.model';
import { ArticleService } from 'src/services/article.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss'] 
})
export class AccueilComponent implements OnInit {

  articles: Article[];
  catalogue = [
    "../../../../assets/ai-bot.jpeg",
    "../../../../assets/ai-bot-1.jpg",
    "../../../../assets/ai-bot-2.jpg",
    "../../../../assets/ai-bot-3.png"
  ]
  str: string;
  indice: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.str = this.catalogue[this.indice];

    setInterval(() => {
      this.nextImage()
    }, 10000);
  }

  nextImage(): void {
    const taille = this.catalogue.length;
    this.indice = this.indice + 1;
    if(this.indice >= taille)
      this.indice = 0;
    this.str = this.catalogue[this.indice];
  }

  prevImage(): void {
    const taille = this.catalogue.length;
    this.indice = this.indice - 1;
    if(this.indice < 0)
      this.indice = taille - 1;
    this.str = this.catalogue[this.indice];
  }
}

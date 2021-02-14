import { Article } from 'src/models/article.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-table-right',
  templateUrl: './widget-table-right.component.html',
  styleUrls: ['./widget-table-right.component.scss']
})
export class WidgetTableRightComponent implements OnInit {

  displayedColumns = ['titre', 'image', 'vues', 'date'];
  mesDerniersPatiens: Article[] = [
    {
      id: 'string',
      titre: 'titre',
      src: 'String',
      corps: 'String',
      nombreDeVue: 150,
      dateEdition: new Date()
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

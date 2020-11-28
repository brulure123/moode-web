import { Article } from 'src/models/article.model';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private firestore: AngularFirestore) { }

  getArticles(): any{
    return this.firestore.collection('articles').snapshotChanges();
  }

  getArticleById(id: string): Article{
    return null;
  }

  createArticle(article: Article): any {
    return this.firestore.collection('articles').add(article);
  }

  updateArticle(article: Article): any {
    delete article.id;
    this.firestore.doc('articles/' + article.id).update(article);
  }

  deleteArticle(articleId: string): any {
    this.firestore.doc('articles/' + articleId).delete();
  }
}

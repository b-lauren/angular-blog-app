import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from './article.model';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(public http: HttpClient) {} //DI for HttpClient

  //Post method - to save to JSON file
  //first param url and 2nd JSON object
  storeArticleDetails(article: any): Observable<Article> {
    //this.http.post('http://localhost:3000/articles', article).subscribe(
    //(result) => console.log(result),
    //(error) => console.log(error)
    //);
    return this.http.post<Article>('http://localhost:3000/articles', article);
  }

  //Get method to retreieve data from JSON file
  retrieveArticleDetails(): Observable<Article[]> {
    return this.http.get<Article[]>('http://localhost:3000/articles');
  }

  deleteArticleRecord(id: any): Observable<Article> {
    return this.http.delete<Article>('http://localhost:3000/articles/' + id);
  }

  editArticleDetails(article: any): Observable<Article> {
    return this.http.put<Article>(
      'http://localhost:3000/articles/' + article.id,
      article
    );
  }
}

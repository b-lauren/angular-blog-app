import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from './article.model';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(public http: HttpClient) {} //DI for HttpClient

  //Post method - first param url and 2nd JSON object
  storeArticleDetails(article: any): Observable<Article> {
    //this.http.post('http://localhost:3000/articles', article).subscribe(
    //(result) => console.log(result),
    //(error) => console.log(error)
    //);
    return this.http.post<Article>('http://localhost:3000/articles', article);
  }
}

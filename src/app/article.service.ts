import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(public http: HttpClient) {} //DI for HttpClient

  //Post method - first param url and 2nd JSON object
  storeArticleDetails(article: any) {
    this.http.post('http://localhost:3000/articles', article).subscribe(
      (result) => console.log(result),
      (error) => console.log(error)
    );
  }
}

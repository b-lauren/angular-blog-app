import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Article } from '../article.model';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
})
export class ArticlesComponent implements OnInit {
  articleRef = new FormGroup({
    id: new FormControl(),
    title: new FormControl(),
    text: new FormControl(),
  });

  resultMessage: string = '';
  articles?: Array<Article>; //stores JSON values retrieved from file

  constructor(public art: ArticleService) {} //DI for service class

  ngOnInit(): void {
    this.art
      .retrieveArticleDetails()
      .subscribe((result) => (this.articles = result));
  }

  storeArticle() {
    //console.log('Event Fired');
    let article = this.articleRef.value;
    //console.log(article);
    this.art.storeArticleDetails(article).subscribe(
      (result) => {
        this.resultMessage = 'Article stored correctly';
      },
      (error) => {
        this.resultMessage = "Aricle didn't store - try entering a unique ID";
      }
    );
  }
}

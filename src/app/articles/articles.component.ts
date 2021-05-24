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
  idVar: boolean = false;
  buttonValue: string = 'Save';

  constructor(public art: ArticleService) {} //DI for service class

  ngOnInit(): void {
    this.art
      .retrieveArticleDetails()
      .subscribe((result) => (this.articles = result));
  }

  storeArticle() {
    if (this.buttonValue == 'Save') {
      let article = this.articleRef.value;
      this.art.storeArticleDetails(article).subscribe(
        (result) => {
          this.resultMessage = 'Article stored correctly';
          //new info gets saved
          this.art
            .retrieveArticleDetails()
            .subscribe((result) => (this.articles = result));
        },
        (error) => {
          this.resultMessage = "Aricle didn't store - try entering a unique ID";
        }
      );
    } else {
      //console.log('Please update the record');
      let article = this.articleRef.value;
      this.art.editArticleDetails(article).subscribe(
        (result) => {
          this.resultMessage = 'Article updated successfully';
          //new info gets saved
          this.art
            .retrieveArticleDetails()
            .subscribe((result) => (this.articles = result));
          this.idVar = false;
          this.buttonValue = 'Save';
        },
        (error) => {
          this.resultMessage = "Aricle didn't update";
        }
      );
    }
    this.articleRef.reset();
  }

  deleteArticle(id: any) {
    //console.log('Delete called' + id);
    this.art.deleteArticleRecord(id).subscribe((result) => {
      this.art
        .retrieveArticleDetails()
        .subscribe((result) => (this.articles = result));
    });
  }

  editArticle(article: any) {
    //console.log(article);
    this.articleRef.setValue(article);
    this.idVar = true;
    this.buttonValue = 'Update';
  }
}

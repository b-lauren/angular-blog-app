import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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

  constructor() {}

  ngOnInit(): void {}
}

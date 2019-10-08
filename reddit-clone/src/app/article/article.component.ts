import { Component, OnInit, HostBinding, Input } from '@angular/core';
import {Article} from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input() article: Article;

  constructor() { 
    //this.article = new Article("CSC436","https://www.cdm.depaul.edu/academics/pages/courseinfo.aspx?CrseId=011628",5);
  }

  ngOnInit() {
  }

  voteUp(): boolean{
    this.article.voteUp();
    return false;
  }

  voteDown(): boolean{
    this.article.voteDown();
    return false;
  }
}

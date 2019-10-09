import { Component, OnInit, HostBinding, Input } from '@angular/core';
import {Article} from './article.model';
import {FlagserviceService} from '../flagservice.service';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input() article: Article;

  constructor(private flagservice: FlagserviceService, private ap: AppComponent) {
    this.flagservice = flagservice; 
    this.ap = ap;
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

  flagArticle(): Article{
    var low = this.ap.getLowest();
    if(this.article.votes == low){
      return this.article;
    }else{
      this.flagservice.flagedArticle(this.article, low);
      return this.article;
    }
  }
}

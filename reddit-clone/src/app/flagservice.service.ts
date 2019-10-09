import { Injectable } from '@angular/core';
import { Article } from './article/article.model';

@Injectable({
  providedIn: 'root'
})
export class FlagserviceService {

  constructor() {
   }

  flagedArticle(fa:Article, low: number): Article{
    fa.votes = low - 1;
    return fa;
  }

}

import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {map, Observable} from 'rxjs'

import {ArticleInputInterface} from 'src/app/shared/types/article-input.interface'
import {ArticleSaveResponseInterface} from 'src/app/shared/types/article-save-response.interface'
import {ArticleInterface} from 'src/app/shared/types/article.interface'
import {environment} from 'src/environments/environments.prod'

@Injectable()
export class ArticleNewService {
  constructor(private httpClient: HttpClient) {}

  createArticle(
    articleInput: ArticleInputInterface
  ): Observable<ArticleInterface> {
    const url = environment.apiUrl + '/articles'
    return this.httpClient
      .post<ArticleSaveResponseInterface>(url, {article: articleInput})
      .pipe(map((response: ArticleSaveResponseInterface) => response.article))
  }
}

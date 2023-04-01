import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {map, Observable} from 'rxjs'
import {ArticleResponseInterface} from 'src/app/shared/types/article-response.interface'
import {ArticleInterface} from 'src/app/shared/types/article.interface'
import {environment} from 'src/environments/environments'

@Injectable()
export class ArticleService {
  constructor(private httpClient: HttpClient) {}

  getArticle(slug: string): Observable<ArticleInterface> {
    const url = environment.apiUrl + '/articles/' + slug
    return this.httpClient
      .get<ArticleResponseInterface>(url)
      .pipe(map((response: ArticleResponseInterface) => response.article))
  }
}

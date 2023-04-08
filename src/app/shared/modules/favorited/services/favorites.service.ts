import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {Observable, map} from 'rxjs'
import {ArticleResponseInterface} from 'src/app/shared/types/article-response.interface'
import {ArticleInterface} from 'src/app/shared/types/article.interface'
import {environment} from 'src/environments/environments.prod'

@Injectable()
export class FavoritesService {
  constructor(private httpClient: HttpClient) {}

  addToFavorite(slug: string): Observable<ArticleInterface> {
    const apiUrl = this.getApiUrl(slug)
    return this.httpClient.post(apiUrl, {}).pipe(map(this.returnArticle))
  }
  removeFromFavorite(slug: string): Observable<ArticleInterface> {
    const apiUrl = this.getApiUrl(slug)
    return this.httpClient.delete(apiUrl, {}).pipe(map(this.returnArticle))
  }

  getApiUrl(slug: string): string {
    return `${environment.apiUrl}/articles/${slug}/favorite`
  }

  returnArticle(response: ArticleResponseInterface): ArticleInterface {
    return response.article
  }
}

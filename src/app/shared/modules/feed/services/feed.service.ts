import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {Observable} from 'rxjs'
import {FeedResponseInterface} from 'src/app/shared/modules/feed/types/feed-response.interface'
import {environment} from 'src/environments/environments.prod'

@Injectable()
export class FeedService {
  constructor(private httpClient: HttpClient) {}

  getFeed(apiUrl: string): Observable<FeedResponseInterface> {
    const fullUrl = `${environment.apiUrl}${apiUrl}`
    return this.httpClient.get<FeedResponseInterface>(fullUrl)
  }
}

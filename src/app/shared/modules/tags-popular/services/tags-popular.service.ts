import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {map, Observable} from 'rxjs'
import {TagsPopularResponseInterface} from 'src/app/shared/modules/tags-popular/types/tags-popular-response.interface'
import {PopularTag} from 'src/app/shared/types/popular-tag.type'
import {environment} from 'src/environments/environments.prod'

@Injectable()
export class TagsPopularService {
  constructor(private httpClient: HttpClient) {}

  getTagsPopular(): Observable<PopularTag[]> {
    const url = environment.apiUrl + '/tags'
    return this.httpClient
      .get<TagsPopularResponseInterface>(url)
      .pipe(map((response: TagsPopularResponseInterface) => response.tags))
  }
}

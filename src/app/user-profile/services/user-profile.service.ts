import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {Observable, map} from 'rxjs'
import {ProfileResponseInterface} from 'src/app/shared/types/profile-response.interface'
import {ProfileInterface} from 'src/app/shared/types/profile.interface'
import {environment} from 'src/environments/environments'

@Injectable()
export class UserProfileService {
  constructor(private httpClient: HttpClient) {}

  getProfile(slug: string): Observable<ProfileInterface> {
    const url = `${environment.apiUrl}/profiles/${slug}`
    return this.httpClient
      .get<ProfileResponseInterface>(url)
      .pipe(map((response: ProfileResponseInterface) => response.profile))
  }
}

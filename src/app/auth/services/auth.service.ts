import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {map, Observable} from 'rxjs'
import {AuthResponseInterface} from 'src/app/auth/types/auth-response.interface'
import {LoginRequestInterface} from 'src/app/auth/types/login-request.interface'
import {RegisterRequestInterface} from 'src/app/auth/types/register-request.interface'
import {CurrentUserInputInterface} from 'src/app/shared/types/current-user-input.interface'
import {CurrentUserInterface} from 'src/app/shared/types/current-user.interface'
import {environment} from 'src/environments/environments.prod'

@Injectable()
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    const apiUrl = environment.apiUrl + '/users'
    return this.httpClient
      .post<AuthResponseInterface>(apiUrl, data)
      .pipe(map((response: AuthResponseInterface) => response.user))
  }

  login(data: LoginRequestInterface): Observable<CurrentUserInterface> {
    const apiUrl = environment.apiUrl + '/users/login'
    return this.httpClient
      .post<AuthResponseInterface>(apiUrl, data)
      .pipe(map((response: AuthResponseInterface) => response.user))
  }

  getCurrentUser(): Observable<CurrentUserInterface> {
    const apiUrl = environment.apiUrl + '/user'
    return this.httpClient
      .get<AuthResponseInterface>(apiUrl)
      .pipe(map((response: AuthResponseInterface) => response.user))
  }

  updateCurrentUser(
    currentUserInput: CurrentUserInputInterface
  ): Observable<CurrentUserInterface> {
    const apiUrl = environment.apiUrl + '/user'
    return this.httpClient
      .put<AuthResponseInterface>(apiUrl, {user: currentUserInput})
      .pipe(map((response: AuthResponseInterface) => response.user))
  }
}

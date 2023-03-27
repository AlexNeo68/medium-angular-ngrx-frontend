import {Injectable} from '@angular/core'

@Injectable()
export class PersistanceService {
  set(key: string, data: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(data))
    } catch (error) {
      console.log('Persistance set error', error)
    }
  }

  setToken(token: string) {
    try {
      localStorage.setItem('accessToken', token)
    } catch (error) {
      console.log('Persistance set error', error)
    }
  }

  get(key: string): any {
    try {
      return localStorage.getItem(key)
    } catch (error) {
      console.log('Persistance get error', error)
    }
  }
}

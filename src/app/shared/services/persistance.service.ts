import {Injectable} from '@angular/core'

@Injectable()
export class PersistanceService {
  set(key: string, data: any): void {
    try {
      window.localStorage.setItem(key, JSON.stringify(data))
    } catch (error) {
      console.log('Persistance set error', error)
    }
  }

  get(key: string): any {
    try {
      return window.localStorage.getItem(key)
    } catch (error) {
      console.log('Persistance get error', error)
    }
  }
}

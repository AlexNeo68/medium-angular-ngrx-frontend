import {Component, Input, OnInit} from '@angular/core'
import {select, Store} from '@ngrx/store'
import {Observable} from 'rxjs'
import {isLoggedInSelector} from 'src/app/auth/store/selectors'

@Component({
  selector: 'app-feed-toggler',
  templateUrl: './feed-toggler.component.html',
  styleUrls: ['./feed-toggler.component.scss'],
})
export class FeedTogglerComponent implements OnInit {
  constructor(private store: Store) {}
  @Input('tagName') tagNameProps: string

  isLoggedIn$: Observable<boolean>

  ngOnInit(): void {
    this.initializeValues()
  }

  initializeValues(): void {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector))
  }
}

import {Component, OnInit} from '@angular/core'
import {select, Store} from '@ngrx/store'
import {Observable} from 'rxjs'
import {getTagsPopularAction} from 'src/app/shared/modules/tags-popular/store/actions/get-tags-popular.actions'
import {
  getTagsPopularDataSelector,
  getTagsPopularErrorSelector,
  getTagsPopularIsLoadingSelector,
} from 'src/app/shared/modules/tags-popular/store/selectors'
import {PopularTag} from 'src/app/shared/types/popular-tag.type'

@Component({
  selector: 'app-tags-popular',
  templateUrl: './tags-popular.component.html',
  styleUrls: ['./tags-popular.component.scss'],
})
export class TagsPopularComponent implements OnInit {
  isLoading$: Observable<boolean>
  data$: Observable<PopularTag[]>
  error$: Observable<string>

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(getTagsPopularAction())
    this.initializeValues()
  }

  initializeValues(): void {
    this.isLoading$ = this.store.pipe(select(getTagsPopularIsLoadingSelector))
    this.data$ = this.store.pipe(select(getTagsPopularDataSelector))
    this.error$ = this.store.pipe(select(getTagsPopularErrorSelector))
  }
}

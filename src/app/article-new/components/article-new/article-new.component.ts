import {Component, OnInit} from '@angular/core'
import {select, Store} from '@ngrx/store'
import {Observable} from 'rxjs'
import {createArticleAction} from 'src/app/article-new/store/actions/create-article.actions'
import {
  errorsCreateArticleSelector,
  isSubmittingCreateArticleSelector,
} from 'src/app/article-new/store/selectors'
import {ArticleInputInterface} from 'src/app/shared/types/article-input.interface'
import {BackendErrorsInterface} from 'src/app/shared/types/backend-errors.interface'

@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  styleUrls: ['./article-new.component.scss'],
})
export class ArticleNewComponent implements OnInit {
  initialValues: ArticleInputInterface = {
    title: '',
    body: '',
    description: '',
    tagList: [],
  }
  isSubmitting$: Observable<boolean>
  errors$: Observable<BackendErrorsInterface>

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initializeValues()
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(
      select(isSubmittingCreateArticleSelector)
    )
    this.errors$ = this.store.pipe(select(errorsCreateArticleSelector))
  }

  onCreateArticle(formValues: ArticleInputInterface) {
    this.store.dispatch(createArticleAction({articleInput: formValues}))
  }
}

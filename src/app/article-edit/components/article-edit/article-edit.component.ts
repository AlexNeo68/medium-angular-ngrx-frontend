import { Component, OnInit } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { updateArticleAction } from 'src/app/article-edit/store/actions/update-article.actions'
import { errorsUpdateArticleSelector, isSubmittingUpdateArticleSelector } from 'src/app/article-edit/store/selectors'


import { ArticleInputInterface } from 'src/app/shared/types/article-input.interface'
import { BackendErrorsInterface } from 'src/app/shared/types/backend-errors.interface'

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.scss'],
})
export class ArticleEditComponent implements OnInit {
  initialValues: ArticleInputInterface = {
    title: '',
    body: '',
    description: '',
    tagList: [],
  }

  slug: string = ''
  isSubmitting$: Observable<boolean>
  errors$: Observable<BackendErrorsInterface>

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.initializeValues()
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(
      select(isSubmittingUpdateArticleSelector)
    )
    this.errors$ = this.store.pipe(select(errorsUpdateArticleSelector))
  }

  onUpdateArticle(formValues: ArticleInputInterface) {
    this.store.dispatch(updateArticleAction({ slug: this.slug, articleInput: formValues }))
  }
}

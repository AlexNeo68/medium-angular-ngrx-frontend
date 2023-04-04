import {createSelector} from '@ngrx/store'
import {CreateArticleStateInterface} from 'src/app/article-new/types/create-article.state.interface'
import {AppStateInterface} from 'src/app/shared/types/app-state.interface'

export const createArticleFeatureSelector = (state: AppStateInterface) =>
  state.createArticle

export const isSubmittingCreateArticleSelector = createSelector(
  createArticleFeatureSelector,
  (state: CreateArticleStateInterface) => state.isSubmitting
)

export const errorsCreateArticleSelector = createSelector(
  createArticleFeatureSelector,
  (state: CreateArticleStateInterface) => state.validationErrors
)

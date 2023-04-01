import {createFeatureSelector, createSelector} from '@ngrx/store'
import {AppStateInterface} from 'src/app/shared/types/app-state.interface'
import {ArticleStateInterface} from 'src/app/shared/types/article-state.interface'

export const getArticleFeatureSelector = (
  state: AppStateInterface
): ArticleStateInterface => state.article

export const getArticleIsLoadingSelector = createSelector(
  getArticleFeatureSelector,
  (state: ArticleStateInterface) => state.isLoading
)

export const getArticleDataSelector = createSelector(
  getArticleFeatureSelector,
  (state: ArticleStateInterface) => state.data
)

export const getArticleErrorSelector = createSelector(
  getArticleFeatureSelector,
  (state: ArticleStateInterface) => state.error
)

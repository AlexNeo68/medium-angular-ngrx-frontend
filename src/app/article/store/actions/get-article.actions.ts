import {createAction, props} from '@ngrx/store'
import {ActionTypes} from 'src/app/article/store/action-types'
import {ArticleInterface} from 'src/app/shared/types/article.interface'

export const GetArticleAction = createAction(
  ActionTypes.GET_ARTICLE,
  props<{slug: string}>()
)

export const GetArticleSuccessAction = createAction(
  ActionTypes.GET_ARTICLE_SUCCESS,
  props<{article: ArticleInterface}>()
)

export const GetArticleFailureAction = createAction(
  ActionTypes.GET_ARTICLE_FAILURE
)

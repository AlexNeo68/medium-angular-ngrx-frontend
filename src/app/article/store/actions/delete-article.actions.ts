import {createAction, props} from '@ngrx/store'
import {ActionTypes} from 'src/app/article/store/action-types'

export const DeleteArticleAction = createAction(
  ActionTypes.DELETE_ARTICLE,
  props<{slug: string}>()
)

export const DeleteArticleSuccessAction = createAction(
  ActionTypes.DELETE_ARTICLE_SUCCESS
)

export const DeleteArticleFailureAction = createAction(
  ActionTypes.DELETE_ARTICLE_FAILURE
)

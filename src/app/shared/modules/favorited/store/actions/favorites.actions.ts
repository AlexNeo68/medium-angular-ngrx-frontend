import {createAction, props} from '@ngrx/store'
import {ActionTypes} from 'src/app/shared/modules/favorited/store/action-types'
import {ArticleInterface} from 'src/app/shared/types/article.interface'

export const FavoritesAction = createAction(
  ActionTypes.FAVORITES,
  props<{isFavorited: boolean; slug: string}>()
)

export const FavoritesActionSuccess = createAction(
  ActionTypes.FAVORITES_SUCCESS,
  props<{article: ArticleInterface}>()
)

export const FavoritesActionFailure = createAction(
  ActionTypes.FAVORITES_FAILURE
)

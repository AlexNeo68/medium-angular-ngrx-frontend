import {routerNavigationAction} from '@ngrx/router-store'
import {createReducer, on} from '@ngrx/store'

import {
  GetArticleAction,
  GetArticleFailureAction,
  GetArticleSuccessAction,
} from 'src/app/article/store/actions/get-article.actions'
import {ArticleStateInterface} from 'src/app/shared/types/article-state.interface'

const initialState: ArticleStateInterface = {
  isLoading: false,
  data: null,
  error: null,
}

export const ArticleReducer = createReducer(
  initialState,
  on(GetArticleAction, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(GetArticleSuccessAction, (state, action) => ({
    ...state,
    isLoading: false,
    data: action.article,
  })),
  on(GetArticleFailureAction, (state) => ({
    ...state,
    isLoading: false,
  })),
  on(routerNavigationAction, (state) => initialState)
)

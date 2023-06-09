import {createReducer, on} from '@ngrx/store'
import {
  createArticleAction,
  createArticleFailureAction,
  createArticleSuccessAction,
} from 'src/app/article-new/store/actions/create-article.actions'
import {CreateArticleStateInterface} from 'src/app/article-new/types/create-article.state.interface'

const initialState: CreateArticleStateInterface = {
  isSubmitting: false,
  validationErrors: null,
}

export const createArticleReducer = createReducer(
  initialState,
  on(createArticleAction, (state: CreateArticleStateInterface) => ({
    ...state,
    isSubmitting: true,
    validationErrors: null,
  })),
  on(createArticleSuccessAction, (state: CreateArticleStateInterface) => ({
    ...state,
    isSubmitting: false,
  })),
  on(
    createArticleFailureAction,
    (state: CreateArticleStateInterface, action) => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    })
  )
)

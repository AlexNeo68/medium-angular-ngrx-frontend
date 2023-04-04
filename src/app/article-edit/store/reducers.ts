import { createReducer, on } from '@ngrx/store'
import { getArticleAction, getArticleFailureAction, getArticleSuccessAction } from 'src/app/article-edit/store/actions/get-article.actions'
import { updateArticleAction, updateArticleFailureAction, updateArticleSuccessAction } from 'src/app/article-edit/store/actions/update-article.actions'
import { UpdateArticleStateInterface } from 'src/app/article-edit/types/update-article.state.interface'



const initialState: UpdateArticleStateInterface = {
  isSubmitting: false,
  validationErrors: null,
  isLoading: false,
  article: null
}

export const updateArticleReducer = createReducer(
  initialState,
  on(updateArticleAction, (state: UpdateArticleStateInterface) => ({
    ...state,
    isSubmitting: true,
    validationErrors: null,
  })),
  on(updateArticleSuccessAction, (state: UpdateArticleStateInterface) => ({
    ...state,
    isSubmitting: false,
  })),
  on(
    updateArticleFailureAction,
    (state: UpdateArticleStateInterface, action) => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    })
  ),
  on(getArticleAction, (state: UpdateArticleStateInterface) => ({
    ...state,
    isLoading: true,
  })),
  on(
    getArticleSuccessAction,
    (state: UpdateArticleStateInterface, action) => ({
      ...state,
      isLoading: false,
      article: action.article,
    })
  ),
  on(getArticleFailureAction, (state: UpdateArticleStateInterface) => ({
    ...state,
    isLoading: false,
  })),

)

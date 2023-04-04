import { createReducer, on } from '@ngrx/store'
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
  )
)

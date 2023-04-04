import { ArticleInterface } from 'src/app/shared/types/article.interface'
import { BackendErrorsInterface } from 'src/app/shared/types/backend-errors.interface'

export interface UpdateArticleStateInterface {
  isSubmitting: boolean
  isLoading: boolean
  article: ArticleInterface
  validationErrors: BackendErrorsInterface
}

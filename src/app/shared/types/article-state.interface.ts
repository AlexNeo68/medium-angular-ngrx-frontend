import {ArticleInterface} from 'src/app/shared/types/article.interface'

export interface ArticleStateInterface {
  isLoading: boolean
  data: ArticleInterface | null
  error: string | null
}

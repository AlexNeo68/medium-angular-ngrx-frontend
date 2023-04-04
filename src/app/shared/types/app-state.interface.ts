import { UpdateArticleStateInterface } from 'src/app/article-edit/types/update-article.state.interface'
import { CreateArticleStateInterface } from 'src/app/article-new/types/create-article.state.interface'
import { AuthStateInterface } from 'src/app/auth/types/auth-state.interface'
import { FeedStateInterface } from 'src/app/shared/modules/feed/types/feed-state.interface'
import { TagsPopularStateInterface } from 'src/app/shared/modules/tags-popular/types/tags-popular-state.interface'
import { ArticleStateInterface } from 'src/app/shared/types/article-state.interface'

export interface AppStateInterface {
  auth: AuthStateInterface
  feed: FeedStateInterface
  tagsPopular: TagsPopularStateInterface
  article: ArticleStateInterface
  createArticle: CreateArticleStateInterface
  updateArticle: UpdateArticleStateInterface
}

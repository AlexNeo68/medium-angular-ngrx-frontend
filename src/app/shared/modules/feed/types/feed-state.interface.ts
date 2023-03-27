import {FeedResponseInterface} from 'src/app/shared/modules/feed/types/feed-response.interface'

export interface FeedStateInterface {
  isLoading: boolean
  data: FeedResponseInterface | null
  error: string | null
}

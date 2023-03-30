import {PopularTag} from 'src/app/shared/types/popular-tag.type'

export interface TagsPopularStateInterface {
  isLoading: boolean
  data: PopularTag[] | null
  error: string | null
}

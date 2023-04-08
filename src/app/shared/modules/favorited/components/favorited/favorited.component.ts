import {Component, Input, OnInit} from '@angular/core'
import {Store} from '@ngrx/store'
import {FavoritesAction} from 'src/app/shared/modules/favorited/store/actions/favorites.actions'

@Component({
  selector: 'app-favorited',
  templateUrl: './favorited.component.html',
  styleUrls: ['./favorited.component.scss'],
})
export class FavoritedComponent implements OnInit {
  @Input('isFavorited') isFavoritedProps: boolean
  @Input('favoritesCount') favoritesCountProps: number
  @Input('articleSlug') articleSlugProps: string

  favoritesCount: number
  isFavorited: boolean

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.favoritesCount = this.favoritesCountProps
    this.isFavorited = this.isFavoritedProps
  }

  onFavorite() {
    if (this.isFavorited) {
      this.favoritesCount--
    } else {
      this.favoritesCount++
    }
    this.store.dispatch(
      FavoritesAction({
        isFavorited: this.isFavorited,
        slug: this.articleSlugProps,
      })
    )
    this.isFavorited = !this.isFavorited
  }
}

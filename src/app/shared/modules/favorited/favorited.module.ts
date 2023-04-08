import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FavoritedComponent} from './components/favorited/favorited.component'
import {EffectsModule} from '@ngrx/effects'
import {FavoritedEffects} from 'src/app/shared/modules/favorited/store/effects/favorited.effect'
import {FavoritesService} from 'src/app/shared/modules/favorited/services/favorites.service'

@NgModule({
  declarations: [FavoritedComponent],
  imports: [CommonModule, EffectsModule.forFeature([FavoritedEffects])],
  exports: [FavoritedComponent],
  providers: [FavoritesService],
})
export class FavoritedModule {}

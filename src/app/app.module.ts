import {NgModule, isDevMode} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {AuthModule} from 'src/app/auth/auth.module'

import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
import {StoreModule} from '@ngrx/store'
import {StoreDevtoolsModule} from '@ngrx/store-devtools'

import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import {EffectsModule} from '@ngrx/effects'
import {TopBarModule} from 'src/app/shared/modules/top-bar/top-bar.module'
import {PersistanceService} from 'src/app/shared/services/persistance.service'
import {AccessTokenInterceptor} from 'src/app/shared/interceptors/access-token.interceptor'
import {GlobalFeedModule} from 'src/app/global-feed/global-feed.module'
import {routerReducer, StoreRouterConnectingModule} from '@ngrx/router-store'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    NgbModule,
    HttpClientModule,
    StoreModule.forRoot({router: routerReducer}, {}),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: !isDevMode()}),
    EffectsModule.forRoot([]),
    TopBarModule,
    GlobalFeedModule,
    StoreRouterConnectingModule.forRoot(),
  ],
  providers: [
    PersistanceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AccessTokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

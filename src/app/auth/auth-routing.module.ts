import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {AuthComponent} from 'src/app/auth/components/auth/auth.component'
import {LoginComponent} from 'src/app/auth/components/login/login.component'
import {RegisterComponent} from 'src/app/auth/components/register/register.component'

const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AuthRoutingModule {}

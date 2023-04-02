import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {ArticleFormComponent} from './components/article-form/article-form.component'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {BackendErrorsModule} from 'src/app/shared/modules/backend-errors/backend-errors.module'

@NgModule({
  declarations: [ArticleFormComponent],
  imports: [CommonModule, ReactiveFormsModule, BackendErrorsModule],
  exports: [ArticleFormComponent],
})
export class ArticleFormModule {}

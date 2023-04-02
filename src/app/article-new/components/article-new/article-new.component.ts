import {Component} from '@angular/core'
import {ArticleInputInterface} from 'src/app/shared/types/article-input.interface'
import {BackendErrorsInterface} from 'src/app/shared/types/backend-errors.interface'

@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  styleUrls: ['./article-new.component.scss'],
})
export class ArticleNewComponent {
  isSubmitting: boolean = false
  initialValues: ArticleInputInterface = {
    title: '',
    body: '',
    description: '',
    tagList: [],
  }
  errors: BackendErrorsInterface = null

  onCreateArticle(formValues: ArticleInputInterface) {
    console.log(formValues)
  }
}

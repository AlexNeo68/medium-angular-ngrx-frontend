import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core'
import {FormBuilder, FormGroup} from '@angular/forms'
import {ArticleInputInterface} from 'src/app/shared/types/article-input.interface'
import {BackendErrorsInterface} from 'src/app/shared/types/backend-errors.interface'

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss'],
})
export class ArticleFormComponent implements OnInit {
  @Input('initialValues') initialValuesProps: ArticleInputInterface
  @Input('isSubmitting') isSubmittingProps: boolean
  @Input('errors') errorsProps: BackendErrorsInterface

  form: FormGroup

  @Output('articleSave') articleSaveEvent =
    new EventEmitter<ArticleInputInterface>()

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm()
  }

  initializeForm(): void {
    this.form = this.fb.group({
      title: this.initialValuesProps.title,
      body: this.initialValuesProps.body,
      description: this.initialValuesProps.description,
      tagList: this.initialValuesProps.tagList.join(', '),
    })
  }

  onSubmit(): void {
    this.articleSaveEvent.emit(this.form.value)
  }
}

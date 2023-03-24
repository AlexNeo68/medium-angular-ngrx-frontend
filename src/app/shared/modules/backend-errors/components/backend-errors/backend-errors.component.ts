import {Component, Input, OnInit} from '@angular/core'
import {BackendErrorsInterface} from 'src/app/shared/types/backend-errors.interface'

@Component({
  selector: 'app-backend-errors',
  templateUrl: './backend-errors.component.html',
  styleUrls: ['./backend-errors.component.scss'],
})
export class BackendErrorsComponent implements OnInit {
  @Input('backendErrors') backendErrorsProps: BackendErrorsInterface
  messages: string[]

  ngOnInit(): void {
    this.messages = Object.keys(this.backendErrorsProps).map((key: string) => {
      const value = this.backendErrorsProps[key].join(', ')
      return `${key} ${value}`
    })
  }
}

import {Component, Input, OnInit} from '@angular/core'
import {UtilsService} from 'src/app/shared/services/utils.service'

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  @Input('url') urlProps: string
  @Input('currentPage') currentPageProps: number
  @Input('limit') limitProps: number
  @Input('total') totalProps: number

  countPages: number
  pages: number[]

  constructor(private utilsService: UtilsService) {}

  ngOnInit(): void {
    this.countPages = Math.ceil(this.totalProps / this.limitProps)
    this.pages = this.utilsService.range(1, this.countPages)
  }
}

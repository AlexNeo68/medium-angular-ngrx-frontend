import {Component, Input} from '@angular/core'
import {PopularTag} from 'src/app/shared/types/popular-tag.type'

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.scss'],
})
export class TagListComponent {
  @Input('tags') tagsProps: PopularTag[]
}

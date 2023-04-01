import {Component, OnDestroy, OnInit} from '@angular/core'
import {ActivatedRoute, Params} from '@angular/router'
import {Subscription} from 'rxjs'

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit, OnDestroy {
  slugSubscription: Subscription
  slug: string

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.slugSubscription = this.route.params.subscribe((params: Params) => {
      this.slug = params['slug']
    })
  }
  ngOnDestroy(): void {
    this.slugSubscription.unsubscribe()
  }
}

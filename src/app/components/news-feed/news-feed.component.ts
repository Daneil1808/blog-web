import { Component, OnInit } from '@angular/core'
import { ApiService } from 'src/app/api.service'

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css'],
})
export class NewsFeedComponent implements OnInit {
  mArticles: any[] | undefined
  mSources: any[] | undefined

  constructor(private newsapi: ApiService) {}

  ngOnInit() {
    // Carregar as fontes de notícias
    this.newsapi.initSources().subscribe((data: { sources?: any[] }) => {
      this.mSources = data.sources || []
    })

    // Carregar os principais artigos
    this.newsapi.initArticles().subscribe((data: { articles?: any[] }) => {
      this.mArticles = data.articles || []
    })
  }

  searchArticles(source: string | String) {
    console.log('selected source is: ' + source)

    // Carregar artigos com base na fonte selecionada
    this.newsapi.getArticlesByID(source).subscribe((data: { articles?: any[] }) => {
      this.mArticles = data.articles || []
    })
  }
}

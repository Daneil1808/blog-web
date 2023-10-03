import { Component, OnInit } from '@angular/core'
import { ApiService } from 'src/app/api.service'
import { Post } from 'src/app/interfaces/Post'
import { FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css'],
})
export class NewsFeedComponent implements OnInit {
  form: FormGroup = new FormGroup({
    comment: new FormControl(''),
  })

  posts: Post[] | undefined

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getAllPosts()
  }

  getAllPosts(): void {
    this.apiService.getAllPosts().subscribe(
      (data: Post[]) => {
        this.posts = data.reverse() || []
      },
      (error) => {
        console.error('Erro ao obter posts:', error)
      },
    )
  }

  submitComment(postId: string): void {
    const comment = this.form.get('comment')?.value

    if (comment && postId) {
      this.apiService.postComment(postId, comment).subscribe(
        (response) => {
          console.log('Comentário adicionado com sucesso:', response)
          this.getAllPosts()
        },
        (error) => {
          console.error('Erro ao adicionar comentário:', error)
        },
      )
    }
  }

  deletePost(postId: string): void {
    this.apiService.deletePost(postId).subscribe(
      () => {
        this.getAllPosts()
      },
      (error) => {
        console.error('Erro ao deletar post:', error)
      },
    )
  }
}

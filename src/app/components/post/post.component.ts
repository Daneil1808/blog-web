import { ApiService } from '../../api.service'
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { FormGroup, FormControl } from '@angular/forms'
import { Router } from '@angular/router'
import { Post } from 'src/app/interfaces/Post'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  ngOnInit(): void {}

  selectedFiles?: FileList
  selectedFileNames: string[] = []

  progressInfos: any[] = []
  message: string[] = []

  previews: string[] = []

  constructor(
    private apiService: ApiService,
    private router: Router,
  ) {}

  form: FormGroup = new FormGroup({
    comments: new FormControl([]),
    text: new FormControl(''),
    links: new FormControl([]),
    photos: new FormControl([]),
  })

  submit() {
    if (this.form.valid) {
      this.submitEM.emit(this.form.value)
    }
  }
  @Input() error: string | null | undefined

  @Output() submitEM = new EventEmitter()

  selectFiles(event: any): void {
    this.message = []
    this.progressInfos = []
    this.selectedFileNames = []
    this.selectedFiles = event.target.files

    this.previews = []
    if (this.selectedFiles && this.selectedFiles[0]) {
      const numberOfFiles = this.selectedFiles.length
      for (let i = 0; i < numberOfFiles; i++) {
        const reader = new FileReader()

        reader.onload = (e: any) => {
          console.log(e.target.result)
          this.previews.push(e.target.result)
        }

        reader.readAsDataURL(this.selectedFiles[i])

        this.selectedFileNames.push(this.selectedFiles[i].name)
      }
    }
  }

  uploadFiles(): void {
    this.message = []

    if (this.selectedFiles) {
      for (let i = 0; i < this.selectedFiles.length; i++) {
        this.upload(i, this.selectedFiles[i])
      }
    }
  }

  upload(idx: number, file: File): void {
    this.progressInfos[idx] = { value: 0, fileName: file.name }

    if (file) {
    }
  }

  submitPost() {
    if (this.form.valid) {
      const post: Post = this.form.value

      this.apiService.postPost(post).subscribe(
        (response) => {
          console.log('Postagem criada com sucesso:', response)
          this.refreshPage()
        },
        (error) => {
          console.error('Erro ao criar postagem:', error)
        },
      )
    }
  }

  refreshPage(): void {
    const currentUrl = this.router.url
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl])
    })
  }
}

import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { User } from './interfaces/User'
import { Photo } from './interfaces/Photo'
import { Post } from './interfaces/Post'
import { Album } from './interfaces/Album'
import { UserLogin } from './interfaces/User-login'

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiUrl = 'http://localhost:8080/api'

  constructor(private http: HttpClient) {}

  postAlbum(album: Album) {
    return this.http.post(`${this.apiUrl}/posts `, album)
  }

  getAllAlbums() {
    return this.http.get(`${this.apiUrl}/posts `)
  }

  getAlbumById(albumId: string) {
    return this.http.get(`${this.apiUrl}/posts/` + albumId)
  }

  deleteAlbum(albumId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/posts/` + albumId)
  }

  postComment(postId: string, comment: Comment): Observable<any> {
    return this.http.post(`${this.apiUrl}/comments/` + postId, comment)
  }

  deleteComment(commentId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/comments/` + commentId)
  }

  postPhotos(photo: Photo) {
    return this.http.post(`${this.apiUrl}/photos `, photo)
  }

  deletePhoto(photoId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/photos/` + photoId)
  }

  postPost(post: Post): Observable<any> {
    return this.http.post(`${this.apiUrl}/posts `, post)
  }

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.apiUrl}/posts`)
  }

  getPostById(postId: string) {
    return this.http.get(`${this.apiUrl}/posts/` + postId)
  }

  deletePost(postId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/posts/` + postId)
  }

  postUser(user: User): Observable<any> {
    return this.http.post(`${this.apiUrl}/users/register`, user)
  }

  loginUser(userLogin: UserLogin): Observable<any> {
    return this.http.post(`${this.apiUrl}/users/login `, userLogin)
  }
}

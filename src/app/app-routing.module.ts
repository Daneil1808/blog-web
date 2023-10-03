import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { UserLoginComponent } from './components/user-login/user-login.component'
import { UserRegisterComponent } from './components/user-register/user-register.component'
import { InstitucionalComponent } from './components/institucional/institucional.component'
import { SidenavComponent } from './components/sidenav/sidenav.component'
import { PostComponent } from './components/post/post.component'
import { PhotoAlbumComponent } from './components/photo-album/photo-album.component'

const routes: Routes = [
  { path: '', component: InstitucionalComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'cadastro', component: UserRegisterComponent },
  { path: 'home', component: SidenavComponent },
  { path: 'post', component: PostComponent },
  { path: 'album', component: PhotoAlbumComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

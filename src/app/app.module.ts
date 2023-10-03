import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { UserRegisterComponent } from './components/user-register/user-register.component'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatToolbarModule } from '@angular/material/toolbar'
import { InstitucionalComponent } from './components/institucional/institucional.component'
import { UserLoginComponent } from './components/user-login/user-login.component'
import { SidenavComponent } from './components/sidenav/sidenav.component'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatListModule } from '@angular/material/list'
import { MatIconModule } from '@angular/material/icon'
import { MatGridListModule } from '@angular/material/grid-list'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { PhotoAlbumComponent } from './components/photo-album/photo-album.component'
import { NewsFeedComponent } from './components/news-feed/news-feed.component'
import { PostComponent } from './components/post/post.component'
import { GalleryModule } from 'ng-gallery'
import { LightboxModule } from 'ng-gallery/lightbox'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { JwtInterceptor } from './jwt.interceptor'

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    UserRegisterComponent,
    InstitucionalComponent,
    SidenavComponent,
    PhotoAlbumComponent,
    NewsFeedComponent,
    PostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatGridListModule,
    GalleryModule,
    LightboxModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

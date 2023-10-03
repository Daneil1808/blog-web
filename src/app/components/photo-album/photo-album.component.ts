import { Component } from '@angular/core'
import { bootstrapApplication } from '@angular/platform-browser'
import { provideAnimations } from '@angular/platform-browser/animations'
import { GalleryItem, Gallery, ImageItem, ImageSize, ThumbnailsPosition } from 'ng-gallery'
import { Lightbox } from 'ng-gallery/lightbox'

@Component({
  selector: 'app-photo-album',
  templateUrl: './photo-album.component.html',
  styleUrls: ['./photo-album.component.css'],
})
export class PhotoAlbumComponent {
  items: GalleryItem[] = []

  imageData = data

  constructor(
    public gallery: Gallery,
    public lightbox: Lightbox,
  ) {}

  ngOnInit() {
    this.items = this.imageData.map((item) => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl }))

    const lightboxRef = this.gallery.ref('lightbox')

    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top,
    })

    lightboxRef.load(this.items)
  }
}

const data = [
  {
    srcUrl: 'https://preview.ibb.co/jrsA6R/img12.jpg',
    previewUrl: 'https://preview.ibb.co/jrsA6R/img12.jpg',
  },
  {
    srcUrl: 'https://preview.ibb.co/kPE1D6/clouds.jpg',
    previewUrl: 'https://preview.ibb.co/kPE1D6/clouds.jpg',
  },
  {
    srcUrl: 'https://preview.ibb.co/mwsA6R/img7.jpg',
    previewUrl: 'https://preview.ibb.co/mwsA6R/img7.jpg',
  },
  {
    srcUrl: 'https://preview.ibb.co/kZGsLm/img8.jpg',
    previewUrl: 'https://preview.ibb.co/kZGsLm/img8.jpg',
  },
]

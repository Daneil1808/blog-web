import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core'
import { MediaMatcher } from '@angular/cdk/layout'

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent implements OnDestroy {
  mobileQuery: MediaQueryList

  fillerNav = ['Feed de Notícias', 'Álbum de fotos']

  fillerContent = Array.from({ length: 1 }, () => `Acesse o menu lateral para navegar pelo Blog.`)

  private _mobileQueryListener: () => void

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)')
    this._mobileQueryListener = () => changeDetectorRef.detectChanges()
    this.mobileQuery.addListener(this._mobileQueryListener)
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener)
  }
}

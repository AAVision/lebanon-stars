import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Project, ShareInfo } from '../../models/project';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [
    LazyLoadImageModule
  ],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  @Input('metadata') metadata: Project;
  @Output('info') info = new EventEmitter<ShareInfo>();
  constructor(private sanitizer: DomSanitizer) { }
  loadUrl: string = '../../../assets/images/loader.gif'

  shareInfo(name: string, url: string) {
    this.info.emit(
      {
        name: name,
        url: url
      }
    )
  }

  createSlug(url: string): string {
    let pathname = new URL(url).pathname;
    let pathnames = []
    if (pathname) {
      pathnames = pathname.split("/")
    }

    var slug = pathnames.slice(-2)
    if (slug.length == 2) {
      return `${slug[0]}/${slug[1]}`
    }

    return ""
  }

  sanitizeImageUrl(imageUrl: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
  }

  createImageUrl(slug: string): SafeUrl {
    return this.sanitizeImageUrl(`https://socialify.git.ci/${this.createSlug(slug)}/image?font=Rokkitt&forks=1&issues=1&language=1&name=1&owner=1&pattern=Circuit%20Board&pulls=1&stargazers=1&theme=Dark`)
  }

}

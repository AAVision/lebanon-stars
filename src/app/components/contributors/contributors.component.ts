import { Component } from '@angular/core';
import { GitHubContributor } from '../../models/github';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { catchError, map, of } from 'rxjs';
import { GithubService } from '../../services/github.service';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@Component({
  selector: 'app-contributors',
  standalone: true,
  imports: [
    LazyLoadImageModule
  ],
  templateUrl: './contributors.component.html',
  styleUrl: './contributors.component.scss'
})
export class ContributorsComponent {
  contributors: GitHubContributor[] = []
  lebanonStar: string = "AAVision/beSideYou"
  defaultImage: string = "./assets/images/loader.gif"

  constructor(private _githubService: GithubService) {
    this._githubService.getGitHubContributors(this.lebanonStar).pipe(
      takeUntilDestroyed(),
      map((data: GitHubContributor[]) => {
        this.contributors = data ? data : []
      }),
      catchError((_) => {
        return of([])
      })
    ).subscribe()
  }
}

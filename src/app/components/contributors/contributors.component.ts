import { Component } from '@angular/core';
import { GitHubContributor } from '../../models/github';
import { ProjectService } from '../../services/project.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { catchError, map, of } from 'rxjs';

@Component({
  selector: 'app-contributors',
  standalone: true,
  imports: [],
  templateUrl: './contributors.component.html',
  styleUrl: './contributors.component.scss'
})
export class ContributorsComponent {
  contributors: GitHubContributor[] = []
  lebanonStar: string = "AAVision/beSideYou"

  constructor(private _projectService: ProjectService){
    this._projectService.getGitHubContributors(this.lebanonStar).pipe(
      takeUntilDestroyed(),
      map((data: GitHubContributor[]) => {
        this.contributors = data ? data : []
      }),
      catchError((_)=>{
        return of([])
      })
    ).subscribe()
  }
}

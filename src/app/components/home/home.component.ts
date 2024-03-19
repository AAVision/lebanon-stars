import { ChangeDetectorRef, Component, DestroyRef, ElementRef, ViewChild, inject } from '@angular/core';
import { ProjectComponent} from '../project/project.component';
import { Project, ShareInfo } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { catchError, debounceTime, finalize, map, of } from 'rxjs';
import { GitHubReadMe, GitHubResponse } from '../../models/github';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { MarkdownModule } from 'ngx-markdown';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FilterPipe } from '../../pipes/filter.pipe';
import { RouterModule } from '@angular/router';
import { GithubService } from '../../services/github.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ProjectComponent,
    LazyLoadImageModule, CommonModule, ReactiveFormsModule,
    FilterPipe, MarkdownModule, RouterModule
  ],
  providers: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  destroyRef = inject(DestroyRef)

  @ViewChild("dataBlock", { static: true }) block: ElementRef;
  isLoading: boolean = true
  badges = ["badge-neutral", "badge-primary", "badge-secondary", "badge-accent", "badge-ghost"]

  projects: Project[] = []
  githubData: GitHubResponse
  readMeData: GitHubReadMe
  searchForm: FormGroup
  searchText = ""

  constructor(private _projectService: ProjectService, private cdr: ChangeDetectorRef, private _fb: FormBuilder, private _githubService: GithubService) {
    this._projectService.getProjects().pipe(
      takeUntilDestroyed(),
      map((data: Project[]) => {
        this.projects = data ? data : []
      }),
      catchError((_) => {
        return of([])
      })
    ).subscribe()
  }

  ngOnInit(): void {
    this.searchForm = this._fb.group({
      search: new FormControl("", [Validators.maxLength(30)])
    })

    this.searchForm.get("search").valueChanges.pipe(
      takeUntilDestroyed(this.destroyRef),
      debounceTime(300),
      map((val: string) => {
        this.searchText = val
      })
    ).subscribe()

  }

  ngAfterViewInit(): void {
    this.cdr.detectChanges();
  }

  showModal(): void {
    this.block.nativeElement.classList.add('modal-open');
  }

  closeModal(): void {
    this.block.nativeElement.classList.remove('modal-open');
  }

  getRadomBadge(): string {
    const random = Math.floor(Math.random() * this.badges.length);
    return this.badges[random]
  }

  getGithubInfo(slug: string): void {
    this._githubService.getGithubInfo(slug).pipe(
      takeUntilDestroyed(this.destroyRef),
      map((data: GitHubResponse) => {
        this.githubData = data
      }),
      catchError((_) => {
        return of([])
      }),
      finalize(() => {
        this.isLoading = false
      })
    ).subscribe()
  }

  getReadMeInfo(slug: string): void {
    this._githubService.getReadMeInfo(slug).pipe(
      takeUntilDestroyed(this.destroyRef),
      map((data: GitHubReadMe) => {
        this.readMeData = data
      }),
      catchError((_) => {
        return of([])
      }),
      finalize(() => {
        this.isLoading = false
      })
    ).subscribe()
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

  receiveInfo(data: ShareInfo): void {
    this.showModal()
    let slug = this.createSlug(data.url)
    this.getGithubInfo(slug)
    this.getReadMeInfo(slug)
  }

  decodeReadMe(data: string): string {
    return atob(data)
  }

}

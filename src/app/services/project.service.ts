import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../models/project';
import { HttpClient } from '@angular/common/http';
import { GitHubResponse, GitHubReadMe, GitHubContributor } from '../models/github';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private _http: HttpClient) { }

  public getProjects(): Observable<Project[]> {
    return this._http.get<Project[]>("../../assets/files/data.json")
  }

  public getGithubInfo(slug: string): Observable<GitHubResponse>{
    return this._http.get<GitHubResponse>(`https://api.github.com/repos/${slug}`)
  }

  public getReadMeInfo(slug: string): Observable<GitHubReadMe>{
    return this._http.get<GitHubReadMe>(`https://api.github.com/repos/${slug}/readme`)
  }

  public getGitHubContributors(slug: string): Observable<GitHubContributor[]>{
    return this._http.get<GitHubContributor[]>(`https://api.github.com/repos/${slug}/contributors`)
  }

}


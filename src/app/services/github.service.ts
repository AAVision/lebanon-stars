import { Injectable } from '@angular/core';
import { GitHubResponse, GitHubReadMe, GitHubContributor } from '../models/github';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private _http: HttpClient) { }

  public getGithubInfo(slug: string): Observable<GitHubResponse>{
    return this._http.get<GitHubResponse>(`https://api.github.com/repos/${slug}`)
  }

  public getReadMeInfo(slug: string): Observable<GitHubReadMe>{
    return this._http.get<GitHubReadMe>(`https://api.github.com/repos/${slug}/readme`)
  }

  public getGitHubContributors(slug: string): Observable<GitHubContributor[]>{
    return this._http.get<GitHubContributor[]>(`https://api.github.com/repos/${slug}/contributors`)
  }

  public getGithubRepoLangs(slug: string): Observable<any>{
    return this._http.get<any>(`https://api.github.com/repos/${slug}/languages`)
  }

}

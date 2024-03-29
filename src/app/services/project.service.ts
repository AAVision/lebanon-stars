import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../models/project';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private _http: HttpClient) { }

  public getProjects(): Observable<Project[]> {
    return this._http.get<Project[]>("assets/files/data.json")
  }

}


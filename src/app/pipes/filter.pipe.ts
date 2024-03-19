import { Pipe, PipeTransform } from '@angular/core';
import { Project } from '../models/project';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(projects: Project[], searchText: string): Project[] {
    if (!projects) return []
    return projects.filter(project => project.name.toLocaleLowerCase().indexOf(searchText.toLowerCase()) != -1);
  }

}

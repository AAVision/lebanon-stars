import { Component } from '@angular/core';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@Component({
  selector: 'app-aboutus',
  standalone: true,
  imports: [
    LazyLoadImageModule
  ],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.scss'
})
export class AboutusComponent {
  defaultImage: string = "./assets/images/loader.gif"
}

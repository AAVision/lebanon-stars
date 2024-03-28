import { Component } from '@angular/core';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    LazyLoadImageModule
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  anio: number = new Date().getFullYear();
  defaultImage: string = "../../../../assets/images/loader.gif"
}

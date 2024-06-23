import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShareButtons } from 'ngx-sharebuttons/buttons';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterModule, ShareButtons
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
}

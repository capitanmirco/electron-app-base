import {Component} from '@angular/core';
import {MatToolbar} from '@angular/material/toolbar';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports: [
    MatToolbar,
    MatIcon
  ],
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
}

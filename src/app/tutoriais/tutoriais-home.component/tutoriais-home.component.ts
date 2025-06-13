import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {RouterModule, RouterOutlet} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-tutoriais-home.component',
  imports: [MatIconModule,
    RouterModule,
    HttpClientModule],
  templateUrl: './tutoriais-home.component.html',
  styleUrl: './tutoriais-home.component.css'
})
export class TutoriaisHomeComponent {

}

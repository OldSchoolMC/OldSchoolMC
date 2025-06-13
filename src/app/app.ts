import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HomeMenu} from './templates/home-menu/home-menu';
import {HomeFooter} from './templates/home-footer/home-footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'Oldschool';
}

import { Component } from '@angular/core';
import {RouterModule, RouterOutlet} from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home-menu',
  imports: [RouterModule,
    HttpClientModule,
    RouterOutlet ,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule, MatListModule],
  templateUrl: './home-menu.html',
  styleUrl: './home-menu.css'
})
export class HomeMenu {

}

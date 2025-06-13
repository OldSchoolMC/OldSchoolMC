import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-regras-home.component',
  imports: [MatTabsModule
    , HttpClientModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatTabsModule],
  templateUrl: './regras-home.component.html',
  styleUrl: './regras-home.component.css'
})
export class RegrasHomeComponent {

}

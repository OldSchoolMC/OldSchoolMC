import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, RouterOutlet} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {ClassesDeCombate} from './ClassesDeCombate';

const CLASSE_COMBAT: ClassesDeCombate[] = [
  {tipo: 'Guerreiro', descricao: 'Tanque com defesa sólida'},
  {tipo: 'Bárbaro', descricao: 'Dano puro e fúria'},
  {tipo: 'Ranger', descricao: 'Ataque à distância'},
];

const CLASSE_ESPECIALISTA: ClassesDeCombate[] = [
  {tipo: 'Ferreiro', descricao: 'Armas e armaduras lendárias'},
  {tipo: 'Encantador', descricao: 'Encantamentos'},
  {tipo: 'Alquimista', descricao: 'Poções e efeitos químicos'},
];

const CLASSE_PROVEDORES: ClassesDeCombate[] = [
  {tipo: 'Mineiro', descricao: 'Extrai recursos raros'},
  {tipo: 'Fazendeiro', descricao: 'Alimentos e comércio'},
  {tipo: 'Terraformador', descricao: 'Modifica o ambiente'},
];

@Component({
  selector: 'app-valhallammo.component',
  imports: [MatTabsModule
    , HttpClientModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatTabsModule,],
  templateUrl: './valhallammo.component.html',
  styleUrl: './valhallammo.component.css'
})
export class ValhallammoComponent {
  imagens: string[] = [];

  combateDataSource = CLASSE_COMBAT;
  especialistaDataSource = CLASSE_ESPECIALISTA;
  provedoresDataSource = CLASSE_PROVEDORES;

  displayedColumns: string[] = ['tipo', 'descricao'];

  constructor() {
    for (let i = 1; i <= 44; i++) {
      this.imagens.push(`imagens/valhalla mmo/Melhorias/img_${i}.png`);
    }
  }

}

import { Component } from '@angular/core';
import {MatTab, MatTabGroup, MatTabLabel} from '@angular/material/tabs';
import {MatIcon} from '@angular/material/icon';
import {BlocoDeProtecao} from './BlocoDeProtecao';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow, MatRowDef, MatTable,
  MatTableModule
} from '@angular/material/table';

const BLOCOS_DE_PROTECAO: BlocoDeProtecao[] = [
  {bloco: "Lapis", preco: "R$ 3.000"},
  {bloco: "Esmeralda", preco: "R$ 10.000"},
  {bloco: "End Stone", preco: "R$ 30.000"}
]
@Component({
  selector: 'app-blocos-de-protecao.component',
  imports: [
    MatIcon,
    MatTab,
    MatTabGroup,
    MatTabLabel,
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef,
    MatTable,
    MatTableModule
  ],
  templateUrl: './blocos-de-protecao.component.html',
  styleUrl: './blocos-de-protecao.component.css'
})
export class BlocosDeProtecaoComponent {
  protecaoDataSource = BLOCOS_DE_PROTECAO;

  displayedColumns: string[] = ['bloco', 'preco'];
}

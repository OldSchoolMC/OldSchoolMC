import { Routes } from '@angular/router';
import {HomeMenu} from './templates/home-menu/home-menu';
import {HomeComponent} from './home/home.component/home.component';
import {TutoriaisHomeComponent} from './tutoriais/tutoriais-home.component/tutoriais-home.component';
import {StaffsHomeComponent} from './staffs/staffs-home.component/staffs-home.component';
import {RegrasHomeComponent} from './regras/regras-home.component/regras-home.component';
import {ValhallammoComponent} from './tutoriais/valhallammo.component/valhallammo.component';
import {SlimefunComponent} from './tutoriais/slimefun.component/slimefun.component';
import {BlocosDeProtecaoComponent} from './tutoriais/blocos-de-protecao.component/blocos-de-protecao.component';
import {LojaVirtual} from './tutoriais/loja-virtual/loja-virtual';
import {VillagersComponent} from './tutoriais/villagers.component/villagers.component';
import {LivrosEncantados} from './tutoriais/livros-encantados/livros-encantados';
import {VipsComponent} from './vips.component/vips.component';
import {DoencasComponent} from './tutoriais/doencas.component/doencas.component';
import {CriarLoja} from './tutoriais/criar-loja/criar-loja';

export const routes: Routes = [
  {
    path: '', component: HomeMenu, children: [
      {
        path: '', component: HomeComponent
      },
      {
        path: 'tutoriais', component: TutoriaisHomeComponent
      },
      {
        path: 'tutoriais/valhallammo', component: ValhallammoComponent
      },
      {
        path: 'tutoriais/slimefun', component: SlimefunComponent
      },
      {
        path: 'tutoriais/blocos-de-protecao', component: BlocosDeProtecaoComponent
      },
      {
        path: 'tutoriais/loja-virtual', component: LojaVirtual
      },
      {
        path: 'tutoriais/villagers', component: VillagersComponent
      },
      {
        path: 'tutoriais/livros-encantados', component: LivrosEncantados
      },
      {
        path: 'tutoriais/doencas', component: DoencasComponent
      },
      {
        path: 'tutoriais/criar-loja', component: CriarLoja
      },
      {
        path: 'staffs', component: StaffsHomeComponent
      },
      {
        path: 'regras', component: RegrasHomeComponent
      },
      {
        path: 'vips', component: VipsComponent
      }
    ]
  }
];

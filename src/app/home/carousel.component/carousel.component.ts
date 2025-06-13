import { Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-carousel',
  imports: [SlickCarouselModule, MatSidenavModule, MatListModule],
  standalone: true,
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  slides = [
    {img: 'imagens/carousel/img_1.png', alt: "Imagem1"},
    {img: 'imagens/carousel/img_2.png', alt: "Imagem2"},
    {img: 'imagens/carousel/img_3.png', alt: "Imagem3"},
    {img: 'imagens/carousel/img_4.png', alt: "Imagem4"},
    {img: 'imagens/carousel/img_5.png', alt: "Imagem5"},
  ];

  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "autoplay": true,
    "autoplaySpeed": 3000,
    "pauseOnHover": true,
    "infinite": true,
    "responsive": [
      {
        "breakpoint": 992,
        "settings": {
          "infinite": true,
          "arrows": true,
          "slidesToShow": 1,
          "slidesToScroll": 1,
        },
      },
      {
        "breakpoint": 768,
        "settings": {
          "arrows": true,
          "infinite": true,
          "slidesToShow": 1,
          "slidesToScroll": 1,
        },
      },
    ],
  };
}

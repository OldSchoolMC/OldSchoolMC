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
    {img: 'https://i.ytimg.com/vi/AQ9jZEc5aoU/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBKtKDK8d7oE8RdHIm2y5kulZDEZA', alt: "Imagem1"},
    {img: "https://uploads.folhavitoria.com.br/2024/11/1YoknH5D-c5967ef0-cfec-11ee-b171-0907e3a71f38-minified.webp", alt: "Imagem2"},
    {img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmdVRMpqyBYpEUUX-Iq1grww1hWMNR1A9DnA&s", alt: "Imagem3"},
    {img: "https://pm1.aminoapps.com/6550/56d98e5191fe31fae8c0aeb380ec4b8c5d6af174_hq.jpg", alt: "Imagem4"}
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

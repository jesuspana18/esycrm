import { Component } from '@angular/core';
import {LayoutService} from "../../service/app.layout.service";
import {Router} from "@angular/router";
import {Product} from "../../api/product";
import {ProductService} from "../../service/product.service";
import {PhotoService} from "../../service/photo.service";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {

  products!: Product[];
  images!: any[];

  carouselResponsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  constructor(public layoutService: LayoutService, private productService: ProductService, private photoService: PhotoService , public router: Router) { }

  ngOnInit() {
    this.productService.getProductsSmall().then(products => {
      this.products = products;
    });

    this.photoService.getImages().then(images => {
      this.images = images;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { IProduct } from './products';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  filteredProducts : IProduct[];
  private _filter: string;

  public get filter(): string {
    return this._filter;
  }
  public set filter(value: string) {
    this._filter = value;
    this.filteredProducts = this.filter ? this.executeFilter(this.filter) : this.products;
  }
  products : IProduct[] = [
    {
      name : "Laptop",
      image : "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6221/6221788_sd.jpg;maxHeight=640;maxWidth=550",
      description : "xyz",
      price : 100000,
      rating : 5
    },
    {
      name : "Samsung mobile",
      image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3y2XhYZqqFrc7hydbmKhIf8P5OlkUcdvNEARwxm1tvL6zJYZStQ",
      description : "abc",
      price : 50000,
      rating : 4.5
    },
    {
      name : "Laptop",
      image : "https://target.scene7.com/is/image/Target/GUEST_68bcad73-3137-4cac-8f44-0b97ce6f8a59?wid=488&hei=488&fmt=pjpeg",
      description : "xyz",
      price : 100000,
      rating : 3
    },
    {
      name : "Samsung mobile",
      image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl_xYZ8_sXsFDL6K3z-eX3H75-PsB5deio2e6gfDFL8k92ekPtVQ",
      description : "abc",
      price : 50000,
      rating : 2.7
    },
    {
      name : "Laptop",
      image : "https://c.s-microsoft.com/en-us/CMSImages/Windows10_ViewAll__hero_1920.jpg?version=9827798b-32be-675f-4a86-ae7dca0d2e19",
      description : "xyz",
      price : 100000,
      rating : 4
    },
    {
      name : "Samsung mobile",
      image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3y2XhYZqqFrc7hydbmKhIf8P5OlkUcdvNEARwxm1tvL6zJYZStQ",
      description : "abc",
      price : 50000,
      rating : 5
    }
  ];

  constructor() {
    this.filteredProducts = this.products;
    
   }

  ngOnInit() {
  }

  executeFilter(value : string) : IProduct[] {
    value = value.toLocaleLowerCase();
    return this.products.filter((product : IProduct) => 
    product.name.toLocaleLowerCase().indexOf(value) !== -1);
  }
}

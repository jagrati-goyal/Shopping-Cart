import { Component,  OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnChanges {
 
  width : number;
  @Input() rating : number ;

  constructor() { }

  ngOnChanges() : void{
    this.width = this.rating * 75/5;
    console.log(this.width);
  }


}

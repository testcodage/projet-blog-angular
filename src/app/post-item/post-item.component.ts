import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit {
  @ Input() title: string ;
  @ Input()content: string;
  @ Input()postItemLoveItnb: number;
  @ Input() createdAt: Date;
  constructor() {
    this.postItemLoveItnb = 0;
  }

  ngOnInit() {
  }


  getColor() {
    if ( this.postItemLoveItnb > 0) {
      return 'green';
    } else if (this.postItemLoveItnb < 0) {
      return 'red';
    } else {
      return 'black';
    }
  }

  onLoveIt() {
     ++this.postItemLoveItnb ; }

  onDoNotLoveIt() {
     --this.postItemLoveItnb; }

}

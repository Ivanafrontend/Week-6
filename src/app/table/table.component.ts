import { Component, OnInit } from '@angular/core';


import { ServicesService } from '../services.service';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  msg = '';
  name: string;
  parent: string;
  categories: any = [];
  parentCategoryId: 0;
  post: any[];

  constructor(public service: ServicesService) {
    this.get();


  }

  Categories = { name: '' };

  ngOnInit() {}

  get() {
    this.service.getPost().subscribe(data => {
      this.post = data;
    });
  }

   add() {
    this.service.createPost(this.Categories).subscribe( data => {
      this.categories = data;
    });
  }
  update() {
    this.service.updatePost(this.Categories).subscribe( data => {
      this.categories = data;
    });
  }

}

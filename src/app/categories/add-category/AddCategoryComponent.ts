import { OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';
export class AddCategoryComponent implements OnInit {
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
  ngOnInit() { }
  get() {
    this.service.getPost().subscribe(data => {
      this.post = data;
    });
  }
  add() {
    this.service.createPost(this.Categories).subscribe(data => {
      this.categories = data;
    });
  }
  update() {
    this.service.updatePost(this.Categories).subscribe((data: any) => {
      this.categories = data;
    });
  }
  delete() {

  }
}

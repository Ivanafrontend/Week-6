import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {



  constructor(public service: ServicesService) {
    this.get();

    this.add();
  }
  msg = '';
  name: string;
  parent: string;
  categories: any = [];
  parentCategoryId: 0;
  post: any[];

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
    this.service.updatePost(this.Categories).subscribe( (data: any) => {
      this.categories = data;
    });
  }

}



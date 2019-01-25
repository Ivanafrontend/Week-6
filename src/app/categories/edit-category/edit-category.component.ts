import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit {
  id: number;
  private sub: any;
  editCategory: any[];
  name: string;
  parent: number;
  categories: any = [];
  parentCategoryId: 0;
  post: any[];
  dataService: any;
  parents: [];
  category = {
   'name' : '',
   'parentCategoryId': 0
  };

  constructor(public service: ServicesService, public router:ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.router.params.subscribe(params => {
     console.log(params);
     this.id = params.id;
  });
  this.get();
}

  get() {
    this.service.getPost().subscribe(data => {
      this.post = data[this.id];
      console.log(this.post);
    });
  }
  // onSubmit() {
  //   this.category.name = this.name;
  //   this.category.parentCategoryId = (this.parent) ;
  //   this.service.editCategory(this.category).subscribe(data => {
  //     console.log(this.category);
  //    // this.router.navigate(['/categories']);

  //   });
  // }

  getParentt() {
    this.service.getPost().subscribe(data => {
      this.parents = data ;

    });
  }
}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ServicesService } from '../services.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  msg: string = '';
  name:string;
  parent:string;
  categories: any = [];
  parentCategoryId: 0
 
  constructor(public service: ServicesService) {
    this.get();
   }

   Categories = {'name': ''}
  
  ngOnInit() {
   
  };

  get() {
    this.service.getOnePost().subscribe(
        data => {
          this.categories = data
        }
    )
       
  }


  // getHeroes(): void {
  //   this.heroService.getHeroes()
  //       .subscribe(heroes => this.heroes = heroes);
  // }
  persons = [
    {
      'name': 'Ivana',
      'parent': 'sjnkjfnkdjnf'
    },

  ]

  model: any = {};
  model2:any = {};


  add(form: NgForm) {
    this.model.name = this.name;
    console.log(this.persons)
    this.msg = 'Successfully added';
    this.name = '';
    this.parent = '';
    // this.postData();
}


  delete(i): void {
    var ansver = confirm('delete?');
    console.log(ansver);
    if (ansver) {
      this.persons.splice(i, 1);
    }
    


  }
  myValue;
 edit(i):void{
   
   this.model2.id = this.persons.length + 1;
   this.model2.name = this.persons[i].name;
   this.model2.parent = this.persons[i].parent;
   
   this.myValue = i;

 }
  red = {}
 update():void{
   let i = this.myValue;
   for(let j=0; j<this.persons.length; j++){
     if(i == j){
       this.persons[i] = this.model2;
       this.model2= {};
       this.msg= " Successfully Upadate";
       this.model2 = {};
     }
   }


 }
 
  closeAlert():void{
    this.msg= '';
  
  }
  

  


  

};


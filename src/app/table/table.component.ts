import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  msg: string = '';
  name:string;
  parent:string;
 
  constructor(private http: HttpClient) { }

 
  
  ngOnInit() {
    this.persons.getPersons(
      .subscribe(data => this.persons = data);
    )
  };

 postData() {
    this.http.post('http://127.0.0.1:3000/categories/', this.model)
  }

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
    this.postData();
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


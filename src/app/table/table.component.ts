import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  persons = [
    {
      'name': 'Ivana',
      'parent': 'sjnkjfnkdjnf'
    },

  ]

  model: any = {};

add() {
  this.model.id = this.persons.length + 1;
  this.persons.push(this.model);
  console.log(this.persons)
 

}
delete(i):void {
  var ansver = confirm('delete?');
  console.log(ansver);
  if(ansver){
    this.persons.splice(i,1);
  }


}

};


import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {
  //Practice Examples
  examplename: string = 'Prateek';
  exampleid: number = 22;
  allowNewEXample = false;
  examplecreation = "No example is created";
  egname = '';
  eg2name = 'hello';

  // For Assignment 
  username = 'Prateek ';
  
  getExample()
  {
    return this.exampleid;
  }

  constructor() { 

    setTimeout(() => {
      this.allowNewEXample = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateExample() {
    this.examplecreation = "Example was Created";
  }

  onUpdateExample(event: Event) {
    this.egname = (<HTMLInputElement>event.target).value;
  }

  
}

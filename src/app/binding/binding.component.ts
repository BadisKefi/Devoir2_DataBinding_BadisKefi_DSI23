import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
})
export class BindingComponent implements OnInit {

  titre: string = "apprendre string interpolation";
  color: string = "color:red;";
  nom: string = "badis kefi";

  clickFunction(){
    if(this.color == "color:red;")
    this.color = "color:blue;";
    else if(this.color == "color:blue;")
    this.color = "color:red";
  }

  constructor() { }

  ngOnInit(): void {
  }

}

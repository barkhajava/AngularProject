
import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-success', // helps use this component in other files
    templateUrl: './success.component.html',
    styleUrls: ['./success.component.css']


  })

export class SuccessComponent implements  OnInit{
allowNewServer = false;

constructor(){
  setTimeout(()
 => {
   this.allowNewServer = true;
 },200
  
  ngOnInit(){

  }
}
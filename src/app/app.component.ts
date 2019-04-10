import { Component } from '@angular/core';
import {CustomElementComponent } from './custom-element/custom-element.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'btsrp';
  sush='sushma';
  constructor()

  { 


   var studentname:string;
    var  studentname=this.sush;
   
    console.log(studentname);
   
   
    
    }
  
  

}

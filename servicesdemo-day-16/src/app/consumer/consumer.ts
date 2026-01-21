import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Calculator} from '../services/calculator'
@Component({
  selector: 'app-consumer',
  imports: [FormsModule],
  templateUrl: './consumer.html',
  styleUrl: './consumer.css',
})
export class Consumer {
a=10;
b=5;
result=0;

constructor(private calc:Calculator){}

doAdd(){
  this.result=this.calc.add(this.a,this.b);
}

doSub(){
  this.result=this.calc.sub(this.a,this.b);
}

doMul(){
  this.result=this.calc.mul(this.a,this.b);
}

doDiv(){
    this.result=this.calc.div(this.a,this.b);
}
}

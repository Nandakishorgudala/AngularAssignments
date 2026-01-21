import { DatePipe } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-list-employees',
  imports: [DatePipe],
  templateUrl: './list-employees.html',
  styleUrl: './list-employees.css',
})

export class ListEmployees  {
  employees:Employee[]=[
    {
      id:1,
      name:'Koushik',
      gender:'Male',
      contactPreference:'Email',
      email:'koushikGaddam@gmail.com',
      dateOfBirth:new Date('01/07/2004'),
      isActive:true,
      department:'IT',
      photoPath:'img1.jpeg'
    },
     {
      id:2  ,
      name:'Spoorthy',
      gender:'Female',
      contactPreference:'Email',
      email:'spoorthy@gmail.com',
      dateOfBirth:new Date('01/07/2004'),
      isActive:true,
      department:'AIML',
      photoPath:'img2.jpeg'
    },
     {
      id:3,
      name:'Mani',
      gender:'Male',
      contactPreference:'Email',
      email:'ManiRathnam@gmail.com',
      dateOfBirth:new Date('01/07/2004'),
      isActive:true,
      department:'IT',
      photoPath:'img4.jpeg'
    },
  ];
  constructor(){ }
   
}

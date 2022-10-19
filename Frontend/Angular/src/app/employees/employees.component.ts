import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { EmployeeLocation } from './employee';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employeeLocations: EmployeeLocation[] = [];


  constructor(private employeeService: EmployeeService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getEmployees();
  }


  getEmployees(): void {
    
    this.employeeService.getEmployees()
        .subscribe(response => {this.employeeLocations = response;});
      
  }

}


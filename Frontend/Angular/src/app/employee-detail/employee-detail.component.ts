import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { EmployeeLocation } from '../employees/employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  employeeLocation: EmployeeLocation | undefined;

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private location: Location
  ) {}
  
  ngOnInit(): void {
    this.getEmployees();
  }
  
  getEmployees(): void {
    const zipcode = Number(this.route.snapshot.paramMap.get('Zipcode'));

    this.employeeService.getEmployee(zipcode)
      .subscribe(response => {this.employeeLocation = response;});
    
  }

  goBack(): void {
    this.location.back();
  }

}

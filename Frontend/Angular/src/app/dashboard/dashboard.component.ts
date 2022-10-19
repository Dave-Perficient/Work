import { Component, OnInit } from '@angular/core';
import { EmployeeLocation } from '../employees/employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  employeeLocations: EmployeeLocation[] = [];
  hobbies: { [name: string]: number } = {};
  topHobbies: string[] = [];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(): void {
    this.employeeService.getEmployees()
      .subscribe(employeeLocations => {this.employeeLocations = employeeLocations; this.getTopHobbies()});
    
  }

  getTopHobbies(): void {
    const locationLength = this.employeeLocations.length;

    //Count each hobby
    for (let i = 0; i < locationLength; i++) 
    {
      const employeesLength = this.employeeLocations[i].employees.length;
      for (let j = 0; j < employeesLength; j++) 
      {
        const hobby1Count = this.hobbies[this.employeeLocations[i].employees[j].hobby1];
        const hobby2Count = this.hobbies[this.employeeLocations[i].employees[j].hobby2];
        const hobby3Count = this.hobbies[this.employeeLocations[i].employees[j].hobby3];

        const hobby1 = this.employeeLocations[i].employees[j].hobby1;
        const hobby2 = this.employeeLocations[i].employees[j].hobby2;
        const hobby3 = this.employeeLocations[i].employees[j].hobby3;

        if(hobby1Count === undefined)
        {
          this.hobbies[hobby1] = 1;
        }
        else
        {
          this.hobbies[hobby1] = hobby1Count + 1;
        }
        if(hobby2Count === undefined)
        {
          this.hobbies[hobby2] = 1;
        }
        else
        {
          this.hobbies[hobby2] = hobby2Count + 1;
        }
        if(hobby3Count === undefined)
        {
          this.hobbies[hobby3] = 1;
        }
        else
        {
          this.hobbies[hobby3] = hobby3Count + 1;
        }
                
      }
    }

    //Find most recoreded hobbies
    let hobbies = this.hobbies;
    let counts = Object.values(hobbies);
    let uniqueCounts = [...new Set(counts)];


    let max1 = Math.max(...uniqueCounts);
    let max2 = -1
    let max3 = -1

    if (max1 != 1)
    {
      uniqueCounts.splice(uniqueCounts.indexOf(max1), 1);

      max2 = Math.max(...uniqueCounts);
      if (max2 != 1)
      {
        uniqueCounts.splice(uniqueCounts.indexOf(max2), 1);

        max3 = Math.max(...uniqueCounts);
        if (max3 != 1)
        {
          uniqueCounts.splice(uniqueCounts.indexOf(max3), 1);
        
        }
        else
        {
          max3 = -1;
        } 
    
      }
      else
      {
        max2 = -1;
        max3 = -1;
      }
    }
    else
    {
      max1 = -1;
      max2 = -1;
      max3 = -1;
    }
    
    
    //Save hobbies with most counts
    if (max3 != -1)
    {
      for (const item in hobbies)
      {
        if (hobbies[item] === max1)
        {
          this.topHobbies.push(item);
        }
        else if (hobbies[item] === max2)
        {
          this.topHobbies.push(item);
        }
        else if (hobbies[item] === max3)
        {
          this.topHobbies.push(item);
        }
      }
    }

    else if (max2 != -1)
    {
      for (const item in hobbies)
      {
        if (hobbies[item] === max1)
        {
          this.topHobbies.push(item);
        }
        else if (hobbies[item] === max2)
        {
          this.topHobbies.push(item);
        }
      }
    }
     
    else if (max1 != -1)
    {
      for (const item in hobbies)
      {
        if (hobbies[item] === max1)
        {
          this.topHobbies.push(item);
        }
      }
    }

  }
}
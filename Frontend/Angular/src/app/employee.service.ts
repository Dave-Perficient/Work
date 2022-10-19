import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EmployeeLocation } from './employees/employee';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private url = 'http://localhost:8080/ang'; 
  

  constructor(private http: HttpClient, private messageService: MessageService) { }

  
  getEmployees(): Observable<EmployeeLocation[]> {
    const data = this.http.get<EmployeeLocation[]>(this.url);
    this.messageService.add('EmployeeService: loaded all employees');
    return data;

  }

  getEmployee(zipcode: number): Observable<EmployeeLocation> {
    const urlZipcode = `http://localhost:8080/detail/${zipcode}`;
    
    this.messageService.add(`EmployeeService: loaded employee zipcode=${zipcode}`);
    
    const data = this.http.get<EmployeeLocation>(urlZipcode);
    return data;
    
   
  }

  /** Log message with the MessageService */
  private log(message: string) {
    this.messageService.add(`EmployeeService: ${message}`);
}

}

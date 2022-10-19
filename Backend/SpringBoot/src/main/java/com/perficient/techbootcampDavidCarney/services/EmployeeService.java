package com.perficient.techbootcampDavidCarney.services;

import java.util.List;

import com.perficient.techbootcampDavidCarney.models.Employee;

public interface EmployeeService 
{
	
	Employee saveEmployeeNames(String firstName, String lastName);
	
	void saveEmployeeHobbies(long id, String hobby1, String hobby2, String hobby3);
	
	Employee findLastID();
	
	Employee findEmpByLastName(String lastName);
	
	List<Employee> findAll();
}

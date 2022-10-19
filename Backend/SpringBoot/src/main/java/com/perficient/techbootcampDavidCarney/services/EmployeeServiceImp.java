package com.perficient.techbootcampDavidCarney.services;


import java.util.List;

import org.springframework.stereotype.Service;

import com.perficient.techbootcampDavidCarney.repositorys.EmployeeRepository;
import com.perficient.techbootcampDavidCarney.models.Employee;


@Service
public class EmployeeServiceImp implements EmployeeService
{

	private final EmployeeRepository employeeRepository;
	
	public EmployeeServiceImp(EmployeeRepository employeeRepository) 
	{
        this.employeeRepository = employeeRepository;
    }
	
	
	@Override
	public Employee saveEmployeeNames(String firstName, String lastName)
	{
		Employee employeeObj = new Employee(firstName, lastName);
		employeeRepository.save(employeeObj);
		return employeeObj;
	}
	
	@Override
	public void saveEmployeeHobbies(long id, String hobby1, String hobby2, String hobby3)
	{
		Employee employeeObj = employeeRepository.findById(id);
		employeeObj.setHobby1(hobby1);
		employeeObj.setHobby2(hobby2);
		employeeObj.setHobby3(hobby3);
		employeeRepository.save(employeeObj);
	}
	
	@Override
	public Employee findLastID()
	{
		return employeeRepository.findTopByOrderByIdDesc();
	}
	
	@Override
	public Employee findEmpByLastName(String lastName)
	{
		return employeeRepository.findByLastName(lastName);
	}
	
	@Override
	public List<Employee> findAll()
	{
		return employeeRepository.findAll();
	}
	
}
package com.perficient.techbootcampDavidCarney;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;


import com.perficient.techbootcampDavidCarney.services.EmployeeServiceImp;
import com.perficient.techbootcampDavidCarney.services.LocationServiceImp;
import com.perficient.techbootcampDavidCarney.models.Employee;

@SpringBootApplication
public class TechbootcampDavidCarneyApplication 
{
	
	private static final Logger log = LoggerFactory.getLogger(TechbootcampDavidCarneyApplication.class);

	public static void main(String... args) 
	{
		SpringApplication.run(TechbootcampDavidCarneyApplication.class, args);
	}
	

	@Bean
	public CommandLineRunner demo(EmployeeServiceImp employeeService, LocationServiceImp locationService) 
	{
	    return (args) -> 
	    {
	      log.info("Populated Database with original Employees.");
	      String first = "Dave";
	      String last = "Carney";
	      String h1 = "Soccer";
	      String h2 = "Hiking";
	      String h3 = "Golf";
	      Integer zc = 80204;
	      Long empID = (long) 1;
	
	      
	      employeeService.saveEmployeeNames(first, last);
	      Employee empObj = employeeService.findEmpByLastName(last);
	      employeeService.saveEmployeeHobbies(empObj.getID(), h1,h2,h3);
	      locationService.saveEmployeeLocation(empID, zc);
	      
	      
	    };
	}
}
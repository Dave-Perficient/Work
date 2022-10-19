package com.perficient.techbootcampDavidCarney.controllers;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;


import com.perficient.techbootcampDavidCarney.services.EmployeeServiceImp;
import com.perficient.techbootcampDavidCarney.services.LocationServiceImp;

@RestController
class EmployeeController 
{
	
	private final EmployeeServiceImp employeeService;
	private final LocationServiceImp locationService;
  
	EmployeeController(EmployeeServiceImp employeeService, LocationServiceImp locationService) 
	{
		this.employeeService = employeeService;
		this.locationService = locationService;
	}
  

	@PostMapping("/index")
	public String saveNames(@RequestParam String firstName, @RequestParam String lastName) 
  	{
		employeeService.saveEmployeeNames(firstName, lastName);
		
		return "index";
	}
  
	@PostMapping("/page1")
	public String saveHobbies(@RequestParam String hobby1, @RequestParam String hobby2, @RequestParam String hobby3) 
	{
		Long employeeID = employeeService.findLastID().getID();
		employeeService.saveEmployeeHobbies(employeeID, hobby1,hobby2,hobby3);
	  
		return "page1";
	}
  
	@PostMapping("/page2")
	//The RequestParam variable must be the same as the variable name you pass from the front end
	public String saveZipCode(@RequestParam int zipcode)
	{
		Long employeeID = employeeService.findLastID().getID();
		locationService.saveEmployeeLocation(employeeID, zipcode);

		return "page2";
	}
  
	@GetMapping("/table")
	public ModelAndView updateTable()
	{
 
		ModelAndView mav = new ModelAndView("table");
		mav.addObject("employee", employeeService.findAll());
  
		return mav;
	}

}

package com.perficient.techbootcampDavidCarney.services;

import org.springframework.stereotype.Service;

import com.perficient.techbootcampDavidCarney.models.Location;
import com.perficient.techbootcampDavidCarney.repositorys.LocationRepository;
import com.perficient.techbootcampDavidCarney.repositorys.EmployeeRepository;
import com.perficient.techbootcampDavidCarney.models.Employee;

@Service
public class LocationServiceImp implements LocationService
{

	private final LocationRepository locationRepository;	
	private final EmployeeRepository employeeRepository;

	public LocationServiceImp(LocationRepository locationRepository, EmployeeRepository employeeRepository) 
	{
		this.locationRepository = locationRepository;
		this.employeeRepository = employeeRepository;
	}


	@Override
	public void saveEmployeeLocation(long empID, int zipCode)
	{

		Employee emp = employeeRepository.findById(empID);
		
		Location locationExists = locationRepository.findByZipcode(zipCode);
		
		if (locationExists == null)
		{
			Location locationObj = new Location(zipCode);
			emp.setEmployeeLocation(locationObj);
			
			locationRepository.save(locationObj);
			employeeRepository.save(emp);
		}
		else if (locationExists != null)
		{
			
			emp.setEmployeeLocation(locationExists);
			
			employeeRepository.save(emp);
		}
		
		
	}

	
}
package com.perficient.techbootcampDavidCarney.repositorys;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.perficient.techbootcampDavidCarney.models.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> 
{
	
	//Can create own queries here - Also can just use JpaRepository queries
	
	Employee findById(long id);
	
	Employee findByLastName(String lastName);
	
	Employee findTopByOrderByIdDesc();

}
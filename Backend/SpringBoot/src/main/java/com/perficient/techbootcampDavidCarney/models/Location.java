package com.perficient.techbootcampDavidCarney.models;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "location")
public class Location 
{
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "locationID")
    private Long locID;
	
	@Column(name="Zipcode")
	private int zipcode;

	@OneToMany(cascade = CascadeType.ALL, mappedBy = "employeeLocation")
    public Set<Employee> employees = new HashSet<>();
	
	public Location() {}
	
	public Location(int zipCode)
	{
		this.setZipcode(zipCode);
	}

	public Long getLocID() 
	{
		return locID;
	}

	public void setLocID(Long locID) 
	{
		this.locID = locID;
	}

	public int getZipcode()
	{
		return zipcode;
	}

	public void setZipcode(int zipcode) 
	{
		this.zipcode = zipcode;
	}

	public Set<Employee> getEmployees() 
	{
		return employees;
	}

	public void setEmployees(Set<Employee> employees) 
	{
		this.employees = employees;
	}

	@Override
	public String toString() 
	{
		return "Location [locID=" + locID + ", zipcode=" + zipcode + ", employees=" + employees + "]";
	}
	
	
	
}

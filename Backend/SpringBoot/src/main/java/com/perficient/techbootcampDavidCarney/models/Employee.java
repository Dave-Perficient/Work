package com.perficient.techbootcampDavidCarney.models;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;


@Entity
@Table(name = "employee")
public class Employee 
{

	@Id 
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="ID")
	private Long id;
	
	@Column(name="FirstName")
	private String firstName;
	
	@Column(name="LastName")
	private String lastName;
	
	@Column(name="Hobby1")
	private String hobby1;
	
	@Column(name="Hobby2")
	private String hobby2;
	
	@Column(name="Hobby3")
	private String hobby3;
	
	@ManyToOne()
	@JoinColumn(name = "locationID")
	private Location employeeLocation;

	//JPA needs empty constructor
	Employee() {}

	public Employee(String firstName, String lastName) 
	{

		this.setFirstName(firstName);
		this.setLastName(lastName);
	}

	public Long getID() 
	{
		return id;
	}

	public void setId(Long ID) 
	{
		this.id = ID;
	}

	public String getFirstName() 
	{
		return firstName;
	}

	public void setFirstName(String firstName) 
	{
		this.firstName = firstName;
	}

	public String getLastName() 
	{
		return lastName;
	}

	public void setLastName(String lastName) 
	{
		this.lastName = lastName;
	}

	public String getHobby1() 
	{
		return hobby1;
	}

	public void setHobby1(String hobby1) 
	{
		this.hobby1 = hobby1;
	}

	public String getHobby2() 
	{
		return hobby2;
	}

	public void setHobby2(String hobby2) 
	{
		this.hobby2 = hobby2;
	}

	public String getHobby3() 
	{
		return hobby3;
	}

	public void setHobby3(String hobby3) 
	{
		this.hobby3 = hobby3;
	}


	public Location getEmployeeLocation()
	{
		return employeeLocation;
	}

	public void setEmployeeLocation(Location employeeLocation) 
	{
		this.employeeLocation = employeeLocation;
	}

	@Override
	public String toString() 
	{
		return "employee [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", hobby1=" + hobby1
				+ ", hobby2=" + hobby2 + ", hobby3=" + hobby3 + ", employeeLocation=" + employeeLocation + "]";
	}
	
	
}
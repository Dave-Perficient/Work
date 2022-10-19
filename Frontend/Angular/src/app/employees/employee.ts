interface Employee {
  id: number,
  firstName: string,
  lastName: string,
  hobby1: string,
  hobby2: string,
  hobby3: string,
  locationID: number
}

export interface EmployeeLocation{
  locID: number,
  zipcode: number,
  employees: Employee[]
};


//These variable names MUST be the same as the variable names from backend
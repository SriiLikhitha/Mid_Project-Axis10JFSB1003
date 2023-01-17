package com.axis.crud.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.axis.crud.model.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Integer> {

	@Query(value="SELECT * from employee where emp_id=?",nativeQuery = true)
	public Employee getEmpById(String empId);
	@Query(value="SELECT * from employee where manager_id=?",nativeQuery = true)
	public List<Employee> getEmpByManagerId(String managerId);
	
}

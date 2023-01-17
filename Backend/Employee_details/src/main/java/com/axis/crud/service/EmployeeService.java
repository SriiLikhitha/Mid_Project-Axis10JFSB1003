package com.axis.crud.service;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.axis.crud.model.Employee;
import com.axis.crud.model.Task;

public interface EmployeeService {

	public List<Employee> getAllUsers();
	
	public Employee getUserById(int id);
	
	public Employee createUser( Employee user);
	
	public Employee updateUser(Employee user,int id);
	
	public String deleteUser(int id);
	
}

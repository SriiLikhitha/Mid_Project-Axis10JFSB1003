package com.axis.crud.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity(name="employee")
@Table(name="employee")
public class Employee {

	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	
	@Column(name="emp_name")
	private String empName;
	
	@Column(name="emp_id")
	private String empId;
	
	@Column(name="password")
	private String password;
	
	@Column(name="manager_id")
	private String managerId;
	
	public Employee()
	{
		
	}

	public Employee(int id, String empName, String empId, String password, String managerId) {
		super();
		this.id = id;
		this.empName = empName;
		this.empId = empId;
		this.password = password;
		this.managerId = managerId;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getEmpName() {
		return empName;
	}

	public void setEmpName(String empName) {
		this.empName = empName;
	}

	public String getEmpId() {
		return empId;
	}

	public void setEmpId(String empId) {
		this.empId = empId;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getManagerId() {
		return managerId;
	}

	public void setManagerId(String managerId) {
		this.managerId = managerId;
	}
	
	
	
}

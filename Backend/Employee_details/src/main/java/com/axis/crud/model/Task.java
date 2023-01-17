package com.axis.crud.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
@Entity(name="task")
@Table(name="task")
public class Task {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@Column(name="project_id")
	private String projectId;
	@Column(name="task_description")
	private String taskDescription;
	@Column(name="emp_id")
	private String empId;
	@Column(name="manager_id")
	private String managerId;
	@Column(name="status")
	private String status;

	public Task() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Task(int id, String projectId, String taskDescription, String empId, String managerId, String status) {
		super();
		this.id = id;
		this.projectId = projectId;
		this.taskDescription = taskDescription;
		this.empId = empId;
		this.managerId = managerId;
		this.status = status;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getProjectId() {
		return projectId;
	}

	public void setProjectId(String projectId) {
		this.projectId = projectId;
	}

	public String getTaskDescription() {
		return taskDescription;
	}

	public void setTaskDescription(String taskDescription) {
		this.taskDescription = taskDescription;
	}

	public String getEmpId() {
		return empId;
	}

	public void setEmpId(String empId) {
		this.empId = empId;
	}

	public String getManagerId() {
		return managerId;
	}

	public void setManagerId(String managerId) {
		this.managerId = managerId;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	
	
}

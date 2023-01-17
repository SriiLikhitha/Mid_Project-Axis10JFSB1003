package com.axis.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity(name="manager")
@Table(name="manager")
public class Manager {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(name="m_id")
	private String managerId;
	
	@Column(name="m_name")
	private String managerName;
	@Column(name="m_password")
	private String managerPassword;
	@Column(name="project_id")
	private String projectId;
	
	
	
	public Manager() {
		
	}



	public Manager(int id, String managerId, String managerName, String managerPassword, String projectId) {
		super();
		this.id = id;
		this.managerId = managerId;
		this.managerName = managerName;
		this.managerPassword = managerPassword;
		this.projectId = projectId;
	}



	public int getId() {
		return id;
	}



	public void setId(int id) {
		this.id = id;
	}



	public String getManagerId() {
		return managerId;
	}



	public void setManagerId(String managerId) {
		this.managerId = managerId;
	}



	public String getManagerName() {
		return managerName;
	}



	public void setManagerName(String managerName) {
		this.managerName = managerName;
	}



	public String getManagerPassword() {
		return managerPassword;
	}



	public void setManagerPassword(String managerPassword) {
		this.managerPassword = managerPassword;
	}



	public String getProjectId() {
		return projectId;
	}



	public void setProjectId(String projectId) {
		this.projectId = projectId;
	}
	
	
	
	
}

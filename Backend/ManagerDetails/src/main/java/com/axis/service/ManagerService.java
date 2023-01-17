package com.axis.service;

import java.util.List;

import com.axis.model.Manager;

public interface ManagerService {

	
	public Manager createUser(Manager user);
	
	public List<Manager> getAllUsers();
	
    public Manager getUserById(int id);
	
	public Manager updateUser(Manager user,int id);
	
	public String deleteUser(int id);
	
}


package com.axis.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.axis.exception.IDNotFoundException;
import com.axis.model.Manager;
import com.axis.repository.ManagerRepository;
import com.axis.utils.AppConstants;
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/v2")
public class ManagerController {

	@Autowired
	private ManagerRepository managerRepository;
	
	//getAllUsers
	@GetMapping("/managers")
	public List<Manager> getAllUsers()
	{
		return this.managerRepository.findAll();
	}
	
	//getuserByid
	@GetMapping("/manager/{id}")
	public Manager getUserById(@PathVariable(value="id")int id)
	{
		return this.managerRepository.findById(id)
				.orElseThrow(()->new IDNotFoundException(AppConstants.IDNOT_FOUND_MESSAGE));
	}
	
	//createManager
	@PostMapping("/manager")
	public Manager createUser(@RequestBody Manager user)
	{
		return this.managerRepository.save(user);
	}
	
	//updateUser
	@PutMapping("/manager/{id}")
	public Manager updateUser(@RequestBody Manager user,@PathVariable("id") int id)
	{
		Manager existingUser=this.managerRepository.findById(id)
				.orElseThrow(()-> new IDNotFoundException(AppConstants.IDNOT_FOUND_MESSAGE));
		existingUser.setManagerId(user.getManagerId());
		existingUser.setManagerName(user.getManagerName());
		existingUser.setManagerPassword(user.getManagerPassword());
		existingUser.setProjectId(user.getProjectId());
		return this.managerRepository.save(existingUser);
	}
	
	//deleteUserbyid
	@DeleteMapping("/manager/{id}")
	public String deleteUser(@PathVariable("id")int id)
	{
		Manager existingUser=this.managerRepository.findById(id)
				.orElseThrow(()-> new IDNotFoundException(AppConstants.IDNOT_FOUND_MESSAGE));
		this.managerRepository.delete(existingUser);
		return AppConstants.Manager_DELETE_MESSAGE;
	}
	//list of managers
	@GetMapping("/getallmanagers")
	public List<Manager> getAllManagers()
	{
	
		return this.managerRepository.findAll();
		
	}
	
	//get manager by id
	@GetMapping("/{m_id}")
	public Manager getManagerById(@PathVariable(value="m_id")String managerId)
	{
		return this.managerRepository.getManagerById(managerId);
		
	}
}

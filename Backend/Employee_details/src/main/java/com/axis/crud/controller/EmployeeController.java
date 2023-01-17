package com.axis.crud.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.axis.crud.exception.IDNotFoundException;
import com.axis.crud.model.Employee;
import com.axis.crud.model.Task;
import com.axis.crud.repository.EmployeeRepository;
import com.axis.crud.repository.TaskRepository;
import com.axis.crud.utils.AppConstants;
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/v1")

public class EmployeeController {


	@Autowired
	
	private EmployeeRepository userRepository;
    @Autowired
	private TaskRepository taskRepository;
	
	
	//get all users
	@GetMapping("/employees")
	public List<Employee> getAllUsers()
	{
		return this.userRepository.findAll() ;
		
	}
	/*//get user by id
	@GetMapping("/employee/{id}")
	public Employee getUserById(@PathVariable (value="id")int id)
	{
		return this.userRepository.findById(id)
				.orElseThrow(() -> new IDNotFoundException(AppConstants.IDNOT_FOUND_MESSAGE));
	}*/
	//create user
	@PostMapping("/employee")
	public Employee createUser(@RequestBody Employee user)
	{
		return this.userRepository.save(user);
	}
	//update user
	@PutMapping("/employee/{id}")
	public Employee updateUser(@RequestBody Employee user,@PathVariable("id") int id)
	{
		Employee existingUser=this.userRepository.findById(id)
				.orElseThrow(() -> new IDNotFoundException(AppConstants.IDNOT_FOUND_MESSAGE));
		existingUser.setEmpName(user.getEmpName());
	
		existingUser.setEmpId(user.getEmpId());
		existingUser.setPassword(user.getPassword());
		existingUser.setManagerId(user.getManagerId());
		return this.userRepository.save(existingUser);
		
		
	}
	//delete user by id
	@DeleteMapping("/employee/{id}")
	public String deleteUser(@PathVariable("id")int id)
	{
		Employee existingUser=this.userRepository.findById(id)
				.orElseThrow(() -> new IDNotFoundException(AppConstants.IDNOT_FOUND_MESSAGE));
		this.userRepository.delete(existingUser);
		return AppConstants.Employee_DELETE_MESSAGE;
		
	}
	
	//get employeeByEmpId
	@GetMapping("/employee/{emp_id}")
	public ResponseEntity<Employee> getEmpById(@PathVariable(value="emp_id")String empId)
	{
		return new ResponseEntity<Employee>(this.userRepository.getEmpById(empId),HttpStatus.OK);
	}
	
	@PostMapping("/saveEmployee")
	public boolean  saveNewEmployee(@RequestBody Employee employee)
	{
		this.userRepository.save(employee);
		return true;
	}
	
	//getEmployeeByMAnagerId
	@GetMapping("/getEmpByMid/{manager_id}")
	public List<Employee> getEmpByManagerId(@PathVariable(value="manager_id")String managerId)
	{
		return this.userRepository.getEmpByManagerId(managerId);
	}
	
	
	//get tasks
		@GetMapping("/tasks")
	public List<Task> getAllTasks()
	{
		return this.taskRepository.findAll();
	}
	//createTask
	@PostMapping("/createTask")
	public boolean createTask(@RequestBody Task task)
	{
		this.taskRepository.save(task);
		return true;
	}
	
	//saveTask
	
	@PostMapping("/saveTask")
	public boolean saveTask(@RequestBody Task task)
	{
		this.taskRepository.save(task);
		return true;
	}
	
	//deleteTaskById
	@DeleteMapping("/deleteTask/{id}")
	public String deleteTaskById(@PathVariable(value="id")int id)
	{
		Task task=this.taskRepository.findById(id).orElseThrow(()->new IDNotFoundException(AppConstants.IDNOT_FOUND_MESSAGE));
		this.taskRepository.delete(task);
		return AppConstants.Task_DELETE_MESSAGE;
	}
	
	
	//updateStatus TaskById
	@PutMapping("/updateTask/{id}")
	public boolean UpdateStatusByTaskId(@RequestBody Task task,@PathVariable("id")int id)
	{
		Task Utask=this.taskRepository.findById(id).orElseThrow(()->new IDNotFoundException(AppConstants.IDNOT_FOUND_MESSAGE));
		Utask.setStatus(task.getStatus());
		this.taskRepository.save(Utask);
		return true;
	}
	
	//getTask byEMpID
	@GetMapping("/getTaskByEmpId/{emp_id}")
	public List<Task> getTaskByEmpId(@PathVariable(value="emp_id") String empId)
	{
		return this.taskRepository.getTaskByEmpId(empId);
		
	}
	//getTask ByProjectId
	
	@GetMapping("/getTaskByProjectId/{project_id}")
	public List<Task> getTaskByProjectId(@PathVariable(value="project_id")String projectId)
	{
		return this.taskRepository.getTaskByProjectId(projectId);
	}
	
		
		
	
	
}

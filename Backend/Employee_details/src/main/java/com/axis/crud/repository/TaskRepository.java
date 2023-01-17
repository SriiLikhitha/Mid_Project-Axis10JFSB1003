package com.axis.crud.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.axis.crud.model.Task;

public interface TaskRepository extends JpaRepository<Task, Integer>{

	@Query(value="SELECT * from task  where emp_id=?",nativeQuery = true)
	public List<Task> getTaskByEmpId(String empId);
	@Query(value="SELECT * from task where project_id=?",nativeQuery = true)
	public List<Task> getTaskByProjectId(String projectId);
}

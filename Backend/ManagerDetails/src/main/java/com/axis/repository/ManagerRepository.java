package com.axis.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.axis.model.Manager;
@Repository
public interface ManagerRepository extends JpaRepository<Manager, Integer> {
	@Query(value="SELECT * from manager",nativeQuery = true)
	public List<Manager> getAllManagers();
	@Query(value="SELECT * from manager where m_id=?",nativeQuery = true)
	public Manager getManagerById(String managerId);
}

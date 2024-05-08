package com.mundrisoft_solution.repository;


import com.mundrisoft_solution.mode.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    // Custom query methods if needed
}

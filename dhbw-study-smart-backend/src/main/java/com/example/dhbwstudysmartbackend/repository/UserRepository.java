package com.example.dhbwstudysmartbackend.repository;


import com.example.dhbwstudysmartbackend.entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<Users, Long> {
}

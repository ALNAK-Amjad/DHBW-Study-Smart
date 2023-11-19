package com.example.dhbwstudysmartbackend.repository;


import com.example.dhbwstudysmartbackend.entity.Users;
import com.example.dhbwstudysmartbackend.entity.userDTOs.VerifyUserDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<Users, Long> {
    @Query(value = """
    SELECT USERS.USER_ID as userId,
           USERS.EMAIL as email,
           USERS.PASSWORD as password
    FROM USERS
    WHERE email = ?1
""", nativeQuery = true)
    public VerifyUserDTO getUsersByEmail(String email);
}

package com.appzlogic.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.appzlogic.model.User;

public interface UserRepo extends JpaRepository<User, Long> {

}

package com.binbini.binsearch.repository;

import org.springframework.data.repository.CrudRepository;

import com.binbini.binsearch.model.User;

public interface UserRepository extends CrudRepository<User, Long> {

	User findByEmailAndPassword(String email, String password);
	
	User findByUsernameAndPassword(String username, String password);
	
	User findByUsername(String username);
	
	User findByEmail(String email);
}

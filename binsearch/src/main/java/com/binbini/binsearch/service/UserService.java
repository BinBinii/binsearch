package com.binbini.binsearch.service;

import org.springframework.stereotype.Service;

import com.binbini.binsearch.model.User;

@Service
public interface UserService {

	User login(User user);
	
	void register(User user);
	
	boolean isEmptyUsername(String username);
	
	boolean isEmptyEmail(String email);
}

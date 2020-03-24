package com.binbini.binsearch.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.binbini.binsearch.model.Link;
import com.binbini.binsearch.model.User;
import com.binbini.binsearch.repository.LinkRepository;
import com.binbini.binsearch.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	UserRepository userRepository;
	@Autowired
	LinkRepository linkRepository;
	
	@Override
	public User login(User user) {
		User loginUser = userRepository.findByUsernameAndPassword(user.getUsername(), user.getPassword());
		return loginUser;
	}

	@Override
	public void register(User user) {
		userRepository.save(user);
		Link link=new Link();
		link.setUsername(user.getUsername());
		linkRepository.save(link);
	}

	@Override
	public boolean isEmptyUsername(String username) {
		User isEmpty = (User)userRepository.findByUsername(username);
		return isEmpty!=null?false:true;
	}
	
	@Override
	public boolean isEmptyEmail(String email) {
		User isEmpty = (User)userRepository.findByEmail(email);
		return isEmpty!=null?false:true;
	}
}

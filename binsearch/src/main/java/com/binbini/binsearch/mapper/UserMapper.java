package com.binbini.binsearch.mapper;

import org.springframework.stereotype.Repository;

import com.binbini.binsearch.model.User;

@Repository
public interface UserMapper {

	User sel(long id);
}

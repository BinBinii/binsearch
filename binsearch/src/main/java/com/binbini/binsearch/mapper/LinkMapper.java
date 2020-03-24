package com.binbini.binsearch.mapper;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface LinkMapper {

	void insertLink(@Param("titleId")String titleId, @Param("title")String title, @Param("contentId")String contentId, @Param("content")String content, @Param("username")String username);

	void deleteLink(@Param("titleId")String titleId, @Param("contentId")String contentId, @Param("username")String username);
	
}

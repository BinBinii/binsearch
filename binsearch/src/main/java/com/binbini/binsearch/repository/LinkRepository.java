package com.binbini.binsearch.repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.binbini.binsearch.model.Link;

public interface LinkRepository extends CrudRepository<Link, Long> {

	Link findByUsername(String username);
	
	@Query(value = "update link set ?1 = ?2,?3 = ?4 where username = ?5", nativeQuery = true)
	@Modifying
	@Transactional
	void addLink(String titleId, String title, String contentId, String content, String username);
}

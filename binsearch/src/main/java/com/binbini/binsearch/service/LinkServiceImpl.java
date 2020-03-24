package com.binbini.binsearch.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.binbini.binsearch.mapper.LinkMapper;
import com.binbini.binsearch.model.Link;
import com.binbini.binsearch.repository.LinkRepository;

@Service
public class LinkServiceImpl implements LinkService {

	@Autowired
	LinkRepository linkRepository;
	
	@Autowired
	LinkMapper linkMapper;

	@Override
	public Link selectAllLink(String username) {
		Link link = linkRepository.findByUsername(username);
		return link;
	}
	
	@Override
	public boolean DelLink(String titleId, String contentId, String username) {
		linkMapper.deleteLink(titleId, contentId, username);
		return true;
	}
	
	@Override
	public boolean AddLink(String titleId, String title, String contentId, String content, String username) {
		linkMapper.insertLink(titleId, title, contentId, content, username);
		return true;
	}
}

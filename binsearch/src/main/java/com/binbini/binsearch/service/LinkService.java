package com.binbini.binsearch.service;

import org.springframework.stereotype.Service;

import com.binbini.binsearch.model.Link;

@Service
public interface LinkService {

	Link selectAllLink(String username);

	boolean DelLink(String titleId, String contentId, String username);

	boolean AddLink(String titleId, String title, String contentId, String content, String username);
}

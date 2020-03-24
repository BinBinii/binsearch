package com.binbini.binsearch.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
public class PageController {
	
	@RequestMapping("/")
	public ModelAndView index() {
		return new ModelAndView("/index.html");
	}
	
	@RequestMapping("/user/register")
	public ModelAndView register() {
		return new ModelAndView("/register.html");
	}
}

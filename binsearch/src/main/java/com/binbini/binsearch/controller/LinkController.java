package com.binbini.binsearch.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.alibaba.fastjson.JSON;
import com.binbini.binsearch.model.Link;
import com.binbini.binsearch.model.User;
import com.binbini.binsearch.service.LinkServiceImpl;

@RestController
public class LinkController {

	@Autowired
	LinkServiceImpl linkServiceImpl;
	HttpServletRequest request;
	
	
	@RequestMapping("/link/SelLink")
	public void selAllLink(HttpServletRequest request, HttpServletResponse response) throws Exception {
		String jsonStr;
		User user = (User)request.getSession().getAttribute("user");
		if(user==null) {
			jsonStr = "{\"isSuccess\":"+"true"+"}";
		}else {
			String username = user.getUsername();
			Link links = linkServiceImpl.selectAllLink(username);
			jsonStr = JSON.toJSONString(links);
		}
		request.setCharacterEncoding("utf-8");response.setContentType("text/html;charset=utf-8");
		response.getWriter().append(jsonStr);
	}
	
	@RequestMapping("/link/increaseLink")
	public boolean increaseLink(Model model, HttpServletRequest request) {
		User user = (User)request.getSession().getAttribute("user");
		if(user==null) {
			return false;
		}else {
			String username = user.getUsername();
			String id = request.getParameter("linkId");
			String title = request.getParameter("linkTitle");
			String content = request.getParameter("linkContent");
			boolean isSuccess = linkServiceImpl.AddLink(id+"Title", title, id+"Content", content, username);
			return isSuccess;
		}
		
	}
	
	@RequestMapping("/link/delLink")
	public boolean delLink(Model model, HttpServletRequest request) {
		User user=(User)request.getSession().getAttribute("user");
		if(user==null) {
			return false;
		}else {
			String username = user.getUsername();
			String id = request.getParameter("linkId");
			boolean isSuccess = linkServiceImpl.DelLink(id+"Title", id+"Content", username);
			return isSuccess;
		}

	}

}

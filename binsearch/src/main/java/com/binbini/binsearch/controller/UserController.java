package com.binbini.binsearch.controller;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.binbini.binsearch.model.User;
import com.binbini.binsearch.service.UserServiceImpl;
import com.binbini.binsearch.utils.MD5Encryption;

@RestController
public class UserController {

	@Autowired
	UserServiceImpl userServiceImpl;
	
	@RequestMapping("/user/login_do")
	public ModelAndView login_do(User user, Model model, HttpServletRequest request) throws Exception {
		String password = MD5Encryption.getMD5(user.getPassword());
		user.setPassword(password);
		User isLogin = userServiceImpl.login(user);
		if(isLogin!=null) {
			request.getSession().setAttribute("user", user);
			//themeleaf获取session <p th:text="${session.loginUser.username}"></p>
			model.addAttribute("loginMsg", "welcome "+user.getUsername());
			return new ModelAndView("/index.html");
		}else {
			model.addAttribute("loginMsg", "Login failed, please login again.");
			return new ModelAndView("/index.html");
		}
		
	}
	
	@RequestMapping("/user/logout_do")
	public ModelAndView logout_do(HttpServletRequest request) {
		request.getSession().invalidate();
		return new ModelAndView("redirect:/");
	}
	
	@RequestMapping("/user/verifyusername")
	public void checkUsername(HttpServletRequest request, HttpServletResponse response) throws IOException {
		String username = request.getParameter("username");
		boolean isExist = userServiceImpl.isEmptyUsername(username);
		response.getWriter().append("{\"isSuccess\":"+isExist+"}");
	}
	@RequestMapping("/user/register_do")
	public ModelAndView register_do(User user, Model model) throws Exception {
		String passwordMD5 = MD5Encryption.getMD5(user.getPassword());
		user.setPassword(passwordMD5);
		boolean isSuccessUsername = userServiceImpl.isEmptyUsername(user.getUsername());
		boolean isSuccessEmail = userServiceImpl.isEmptyEmail(user.getEmail());
		if(isSuccessUsername==true&&isSuccessEmail==true) {
			userServiceImpl.register(user);
			return new ModelAndView("/welcome.html");
		}else {
			if(isSuccessUsername==false) {
				model.addAttribute("regMsg","Registration failed, the username is already registered.");
			}
			if(isSuccessEmail==false) {
				model.addAttribute("regMsg","Registration failed, the mailbox is already registered.");
			}
			return new ModelAndView("redirect:/register.html");
		}
	}
}

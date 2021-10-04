package com.timothywang.counter.controllers;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {
    @RequestMapping("/")
    public String index(HttpSession session, Model model) {
        if (session.getAttribute("counter") == null) {
        	session.setAttribute("counter", 1);
        } else {
        	int increment = (int) session.getAttribute("counter");
        	increment++;
        	session.setAttribute("counter", increment);
        }
        
        return "index.jsp";
    }
    
//    @RequestMapping("/addOne") 
//    public String addOne(HttpSession session) {
//    	int increment = (int)session.getAttribute("counter");
//    	increment++;
//    	session.setAttribute("counter", increment);
//    	
//    	return "redirect:/show";
//    }
//    
    @RequestMapping("/double") 
    public String addTwo(HttpSession session) {
    	int increment = (int)session.getAttribute("counter");
    	increment = increment + 2;
    	session.setAttribute("counter", increment);
    	
    	return "double.jsp";
    }
    
    @RequestMapping("/delete") 
    public String delete(HttpSession session) {
    	session.removeAttribute("counter");    	
    	return "redirect:/count";
    }
    
    @RequestMapping("/count")
    public String show(HttpSession session, Model model) {
    	if (session.getAttribute("counter") == null) {
    		model.addAttribute("count", 0);
    	} else {
    		model.addAttribute("count", session.getAttribute("counter"));
    	}
    	
    	return "count.jsp";
    }
    

}

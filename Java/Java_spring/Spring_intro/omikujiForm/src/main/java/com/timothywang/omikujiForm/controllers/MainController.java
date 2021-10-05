package com.timothywang.omikujiForm.controllers;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class MainController {
	
	@GetMapping("/")
	public String index() {
		return "form.jsp";
	}
	
	@PostMapping("/send")
	public String send(HttpSession session,
			@RequestParam(value="years") Integer years, 
			@RequestParam(value="city") String city,
			@RequestParam(value="person") String person,
			@RequestParam(value="hobby") String hobby,
			@RequestParam(value="living") String living,
			@RequestParam(value="compliment") String compliment) {
		
		String output = "In " + years + " years, you will live in " + city + " with " + person + " as your roommate, " + hobby + " for a living. The next time you see a " + living + ", you will have good luck. Also, " + compliment;
		session.setAttribute("output", output);
		
		return "redirect:/result";
	}
	
	@GetMapping("/result")
	public String result(Model model, HttpSession session) {
		model.addAttribute("output", (String) session.getAttribute("output"));
		
		return "result.jsp";
	}
	
}
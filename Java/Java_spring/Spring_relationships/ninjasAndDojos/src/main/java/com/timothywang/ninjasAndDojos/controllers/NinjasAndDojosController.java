package com.timothywang.ninjasAndDojos.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.timothywang.ninjasAndDojos.models.Dojo;
import com.timothywang.ninjasAndDojos.models.Ninja;
import com.timothywang.ninjasAndDojos.services.DojoService;
import com.timothywang.ninjasAndDojos.services.NinjaService;

@Controller
public class NinjasAndDojosController {
	private final DojoService dojoService;
	private final NinjaService ninjaService;
	
	public NinjasAndDojosController(DojoService dojoService, NinjaService ninjaService) {
		this.dojoService = dojoService;
		this.ninjaService = ninjaService;
	}
	
	@RequestMapping("/dojos/new")
	public String newDojo(@ModelAttribute("dojo") Dojo dojo) {
		return "newDojo.jsp";
	}
	
	@RequestMapping(value="/dojos", method=RequestMethod.POST)
	public String createDojo(@Valid @ModelAttribute("dojo") Dojo dojo, BindingResult result) {
		if (result.hasErrors()) {
			return "newDojo.jsp";
		}
		else {
			dojoService.createDojo(dojo);
			return "redirect:/dojos/new";
		}
	}
	
	@RequestMapping("/ninjas/new")
	public String newNinja(@ModelAttribute("ninja") Ninja ninja, Model model) {
		List<Dojo> dojos = dojoService.allDojos();
		model.addAttribute("dojos", dojos);
		return "newNinja.jsp";
	}
	
	@RequestMapping(value="/ninjas", method=RequestMethod.POST)
	public String createNinja(@Valid @ModelAttribute("ninja") Ninja ninja, BindingResult result) {
		if (result.hasErrors()) {
			return "newNinja.jsp";
		}
		else {
			ninjaService.createNinja(ninja);
			return "redirect:/ninjas/new";
		}
	}
	
	@RequestMapping("/dojos/{id}")
	public String dojoInfo(@PathVariable("id") Long id, Model model) {
		Dojo dojo = dojoService.findDojo(id);
		List<Ninja> ninjas = dojo.getNinjas();
		model.addAttribute("dojo", dojo);
		model.addAttribute("ninjas", ninjas);
		return "dojo.jsp";
	}
}

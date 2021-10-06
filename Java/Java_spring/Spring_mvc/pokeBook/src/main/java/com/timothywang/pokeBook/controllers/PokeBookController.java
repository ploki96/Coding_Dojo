package com.timothywang.pokeBook.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.timothywang.pokeBook.models.Expense;
import com.timothywang.pokeBook.services.PokeBookService;


@Controller
public class PokeBookController {
	
	private final PokeBookService pokeBookService;
	
	public PokeBookController(PokeBookService pokeBookService){
	
		this.pokeBookService = pokeBookService;
	}
	@RequestMapping("/expenses")
	public String index(Model model) {
		List<Expense> expenses = pokeBookService.allExpenses();
		model.addAttribute("expensesList", expenses);
		model.addAttribute("expense", new Expense());
		return "index.jsp";
	}
	
	@RequestMapping("/expenses/{id}")
	public String index(
			@PathVariable("id") Long id, Model model) {
		Expense expense = pokeBookService.findExpense(id);
		model.addAttribute("expense", expense);
		
		return "show.jsp";
	}
//	
//	@RequestMapping("/new")
//    public String newBook(@ModelAttribute("book") Book book) {
//        return "new.jsp";
//    }
	
    @RequestMapping(value="/expenses/new", method=RequestMethod.POST)
    public String create(@Valid @ModelAttribute("expense") Expense expense, BindingResult result) {
        if (result.hasErrors()) {
            return "index.jsp";
        } else {
            pokeBookService.createExpense(expense);
            return "redirect:/expenses";
        }
    }
    
    @RequestMapping("/expenses/{id}/edit")
    public String edit(@PathVariable("id") Long id, Model model) {
        Expense expense = pokeBookService.findExpense(id);
        model.addAttribute("expense", expense);
        return "edit.jsp";
    }
    
    @RequestMapping(value="/expenses/edit/{id}", method=RequestMethod.PUT)
    public String update(@Valid @ModelAttribute("expense") Expense expense, BindingResult result, @PathVariable("id") Long id) {
        if (result.hasErrors()) {
            return "edit.jsp";
        } else {
            pokeBookService.updateExpense(id, expense.getName(), expense.getVendor(), expense.getAmount(), expense.getDescription());
            return "redirect:/expenses";
        }
    }
    
    @RequestMapping(value="/expenses/{id}/delete")
    public String destroy(@PathVariable("id") Long id) {
        pokeBookService.deleteExpense(id);
        return "redirect:/expenses";
    }
}
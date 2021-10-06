package com.timothywang.pokeBook.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.timothywang.pokeBook.models.Expense;
import com.timothywang.pokeBook.services.PokeBookService;

@RestController
public class PokeBookAPI {
	private final PokeBookService pokeBookService;
    public PokeBookAPI(PokeBookService pokeBookService){
        this.pokeBookService = pokeBookService;
    }
    
    @RequestMapping("/api/expenses")
    public List<Expense> index() {
        return pokeBookService.allExpenses();
    }
    
    @RequestMapping(value="/api/expenses", method=RequestMethod.POST)
    public Expense create(@RequestParam(value="name") String name, @RequestParam(value="vendor") String vendor, @RequestParam(value="amount") Float amount, @RequestParam(value="description") String description) {
    	Expense expense = new Expense(name, vendor, amount, description);
        return pokeBookService.createExpense(expense);
    }
    
    @RequestMapping("/api/expenses/{id}")
    public Expense show(@PathVariable("id") Long id) {
    	Expense expense = pokeBookService.findExpense(id);
        return expense;
    }
    
    @RequestMapping(value="/api/expenses/{id}", method=RequestMethod.PUT)
    public Expense update(
    		@PathVariable("id") Long id, 
    		@RequestParam(value="name") String name, 
    		@RequestParam(value="vendor") String vendor, 
    		@RequestParam(value="amount") Float amount,
    		@RequestParam(value="description") String description) {
    	Expense expense = pokeBookService.updateExpense(id, name, vendor, amount, description);
        return expense;
    }
    
    @RequestMapping(value="/api/expenses/{id}", method=RequestMethod.DELETE)
    public void destroy(@PathVariable("id") Long id) {
        pokeBookService.deleteExpense(id);
    }
}

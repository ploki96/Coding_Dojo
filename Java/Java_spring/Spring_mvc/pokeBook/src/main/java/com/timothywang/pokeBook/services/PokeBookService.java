package com.timothywang.pokeBook.services;

import java.util.List;
import java.util.Optional;
import org.springframework.stereotype.Service;
import com.timothywang.pokeBook.models.Expense;
import com.timothywang.pokeBook.repositories.PokeBookRepository;

@Service
public class PokeBookService {
	private final PokeBookRepository pokeBookRepository;
    
    public PokeBookService(PokeBookRepository pokeBookRepository) {
        this.pokeBookRepository = pokeBookRepository;
    }
    
    public List<Expense> allExpenses() {
        return pokeBookRepository.findAll();
    }
    // creates an expense
    public Expense createExpense(Expense e) {
        return pokeBookRepository.save(e);
    }
    // retrieves an expense
    public Expense findExpense(Long id) {
        Optional<Expense> optionalExpense = pokeBookRepository.findById(id);
        if(optionalExpense.isPresent()) {
            return optionalExpense.get();
        } else {
            return null;
        }
    }
    // updates an expense
    public Expense updateExpense(Long id, String name, String vendor, Float amount, String description) {
    	Expense expense = findExpense(id);
    	expense.setName(name);
    	expense.setVendor(vendor);
    	expense.setAmount(amount);
    	expense.setDescription(description);
    	pokeBookRepository.save(expense);
    	return expense;
    }
    
    //deletes a book
    public void deleteExpense(Long id) {
    	pokeBookRepository.deleteById(id);
    }
}

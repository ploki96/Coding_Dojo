package com.timothywang.books.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.timothywang.books.models.Book;
import com.timothywang.books.services.BookService;

@Controller
@RequestMapping("/books")
public class BookController {
	
	private final BookService bookService;
	
	public BookController(BookService bookService){
	
		this.bookService = bookService;
	}
	@RequestMapping("/all")
	public String index(Model model) {
		List<Book> books = bookService.allBooks();
		model.addAttribute("booksList", books);
		return "index.jsp";
	}
	
	@RequestMapping("/{id}")
	public String index(
			@PathVariable("id") Long id, Model model) {
		Book book = bookService.findBook(id);
		model.addAttribute("book", book);
		
		return "show.jsp";
	}
	
	@RequestMapping("/new")
    public String newBook(@ModelAttribute("book") Book book) {
        return "new.jsp";
    }
	
    @RequestMapping(value="", method=RequestMethod.POST)
    public String create(@Valid @ModelAttribute("book") Book book, BindingResult result) {
        if (result.hasErrors()) {
            return "new.jsp";
        } else {
            bookService.createBook(book);
            return "redirect:/books/all";
        }
    }
}




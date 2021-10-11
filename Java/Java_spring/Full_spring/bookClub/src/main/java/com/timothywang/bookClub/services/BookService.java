package com.timothywang.bookClub.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.timothywang.bookClub.models.Book;
import com.timothywang.bookClub.repositories.BookRepository;

@Service
public class BookService {
	@Autowired
	private BookRepository bookRepository;
	
	public List<Book> allbooks() {
		return bookRepository.findAll();
	}
	
	public Book createBook(Book book) {
		return bookRepository.save(book);
	}
	
	public Book findBook(Long id) {
		Optional<Book> optionalBook = bookRepository.findById(id);
		if(optionalBook.isPresent()) {
			return optionalBook.get();
		}
		else {
			return null;
		}
	}
	public Book editBook(Long id, String title, String author, String thoughts) {
    	Book book = findBook(id);
    	book.setTitle(title);
    	book.setAuthor(author);
    	book.setThoughts(thoughts);
    	bookRepository.save(book);
    	return book;
    }
}

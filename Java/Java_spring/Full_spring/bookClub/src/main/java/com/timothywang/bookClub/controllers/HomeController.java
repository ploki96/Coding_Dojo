package com.timothywang.bookClub.controllers;

import java.util.List;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.timothywang.bookClub.models.Book;
import com.timothywang.bookClub.models.LoginUser;
import com.timothywang.bookClub.models.User;
import com.timothywang.bookClub.services.BookService;
import com.timothywang.bookClub.services.UserService;


@Controller
public class HomeController {
	@Autowired
    private UserService userServ;
	@Autowired
	private BookService bookServ;
    
    @GetMapping("/")
    public String index(Model model) {
        model.addAttribute("newUser", new User());
        model.addAttribute("newLogin", new LoginUser());
        return "index.jsp";
    }
    
    @GetMapping("/home")
    public String home(Model model, HttpSession session) {
    	List<Book> books = bookServ.allbooks();
    	model.addAttribute("user", userServ.findUser((Long) session.getAttribute("user_id")));
    	model.addAttribute("books", books);
    	return "books.jsp";
    }
    
    @PostMapping("/register")
    public String register(@Valid @ModelAttribute("newUser") User newUser, 
            BindingResult result, Model model, HttpSession session) {
        userServ.register(newUser, result);
        if(result.hasErrors()) {
            model.addAttribute("newLogin", new LoginUser());
            return "index.jsp";
        }
        session.setAttribute("user_id", newUser.getId());
        return "redirect:/home";
    }
    
    @PostMapping("/login")
    public String login(@Valid @ModelAttribute("newLogin") LoginUser newLogin, 
            BindingResult result, Model model, HttpSession session) {
        User user = userServ.login(newLogin, result);
        if(result.hasErrors()) {
            model.addAttribute("newUser", new User());
            return "index.jsp";
        }
        session.setAttribute("user_id", user.getId());
        
        return "redirect:/home";
    }
    
    @GetMapping("/bookForm")
    public String bookForm(Model model, HttpSession session) {
    	model.addAttribute("user", userServ.findUser((Long) session.getAttribute("user_id")));
    	model.addAttribute("newBook", new Book());
    	return "bookForm.jsp";
    }
    
    
    
    @RequestMapping(value="/addBook", method=RequestMethod.POST)
    public String create(@Valid @ModelAttribute("newBook") Book book, BindingResult result) {
        if(result.hasErrors()) {
            return "bookForm.jsp";
        }
        else {
            bookServ.createBook(book);
            return "redirect:/home";
        }
    }
    
    @GetMapping("/book/{id}")
    public String singleBook(@PathVariable("id") Long id, Model model, HttpSession session) {
    	model.addAttribute("user", userServ.findUser((Long) session.getAttribute("user_id")));
    	model.addAttribute("book", bookServ.findBook(id));
    	return "singleBook.jsp";
    }
    
    @RequestMapping("/book/edit/{id}")
    public String edit(@PathVariable("id") Long id, Model model, HttpSession session) {
        Book book = bookServ.findBook(id);
        model.addAttribute("book", book);
    	model.addAttribute("user", userServ.findUser((Long) session.getAttribute("user_id")));
        return "edit.jsp";
    }
    
    @PostMapping("/edit/{id}")
    public String edit(@Valid @ModelAttribute("book") Book book, BindingResult result, @PathVariable("id") Long id) {
        if (result.hasErrors()) {
            return "edit.jsp";
        } else {
            bookServ.editBook(id, book.getTitle(), book.getAuthor(), book.getThoughts());
            return "redirect:/home";
        }
    }
    
    @RequestMapping("/logout")
    public String logout(HttpSession session) {
    	session.removeAttribute("user_id");
    	return "redirect:/";
    }
    
    
}

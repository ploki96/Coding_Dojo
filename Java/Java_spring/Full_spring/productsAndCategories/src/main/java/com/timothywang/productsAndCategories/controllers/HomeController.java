package com.timothywang.productsAndCategories.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.timothywang.productsAndCategories.models.Category;
import com.timothywang.productsAndCategories.models.Product;
import com.timothywang.productsAndCategories.services.CategoryService;
import com.timothywang.productsAndCategories.services.ProductService;

@Controller
public class HomeController {
	private final CategoryService catService;
	private final ProductService prodService;
	
	public HomeController(CategoryService catService, ProductService prodService) {
		this.catService = catService;
		this.prodService = prodService;
	}
	
	@RequestMapping("/categories/new")
	public String newCategory(@ModelAttribute("category") Category cat) {
		return "newCategory.jsp";
	}
	
	@RequestMapping(value="/categories", method=RequestMethod.POST)
	public String createCategory(@Valid @ModelAttribute("category") Category cat, BindingResult result) {
		if (result.hasErrors()) {
			return "newCategory.jsp";
		}
		else {
			catService.createCategory(cat);
			return "redirect:/categories/new";
		}
	}
	
	@RequestMapping("/products/new")
	public String newProduct(@ModelAttribute("product") Product product, Model model) {
		return "newProduct.jsp";
	}
	
	@RequestMapping(value="/products", method=RequestMethod.POST)
	public String createProduct(@Valid @ModelAttribute("product") Product product, BindingResult result) {
		if (result.hasErrors()) {
			return "newProduct.jsp";
		}
		else {
			prodService.createProduct(product);
			return "redirect:/products/new";
		}
	}
	
	@RequestMapping("/categories/{id}")
	public String showCategory(@PathVariable("id") Long id, Model model) {
		Category cat = catService.findCategory(id);
		List<Product> catProds = cat.getProducts();
		List<Product> prods = prodService.allProducts();
		prods.removeIf(prod -> (catProds.contains(prod)));
		model.addAttribute("category", cat);
		model.addAttribute("products", prods);
		model.addAttribute("catProds", catProds);
		return "category.jsp";
	}
	
	@RequestMapping("/products/{id}")
	public String showProduct(@PathVariable("id") Long id, Model model) {
		Product prod = prodService.findProduct(id);
		List<Category> prodCats = prod.getCategories();
		List<Category> cats = catService.allCategories();
		cats.removeIf(cat -> (prodCats.contains(cat)));
		model.addAttribute("product", prod);
		model.addAttribute("categories", cats);
		model.addAttribute("prodCats", prodCats);
		return "product.jsp";
	}
	
	@RequestMapping(value="/categories/{id}/add", method=RequestMethod.POST)
	public String addProduct(@RequestParam("product") Long prodId, @PathVariable("id") Long id) {
		Product product = prodService.findProduct(prodId);
		product.addCategory(catService.findCategory(id));
		prodService.updateProduct(product);
		return "redirect:/categories/" + id;
	}
	
	@RequestMapping(value="/products/{id}/add", method=RequestMethod.POST)
	public String addCategory(@RequestParam("category") Long catId, @PathVariable("id") Long id) {
		Category category = catService.findCategory(catId);
		category.addProduct(prodService.findProduct(id));
		catService.updateCategory(category);
		return "redirect:/products/" + id;
	}
}
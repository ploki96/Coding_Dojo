package com.timothywang.productsAndCategories.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.timothywang.productsAndCategories.models.Category;
import com.timothywang.productsAndCategories.repositories.CategoryRepository;

@Service
public class CategoryService {
	private final CategoryRepository repo;
	
	public CategoryService(CategoryRepository repo) {
		this.repo = repo;
	}
	
	public List<Category> allCategories() {
		return repo.findAll();
	}
	
	public Category createCategory(Category cat) {
		return repo.save(cat);
	}
	
	public Category findCategory(Long id) {
		Optional<Category> optionalCategory = repo.findById(id);
		if(optionalCategory.isPresent()) {
			return optionalCategory.get();
		}
		else {
			return null;
		}
	}
	
	public Category updateCategory(Category cat) {
		return this.repo.save(cat);
	}
}

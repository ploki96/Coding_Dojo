package com.timothywang.pokeBook.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.timothywang.pokeBook.models.Expense;

@Repository
public interface PokeBookRepository extends CrudRepository<Expense, Long>{
    List<Expense> findAll();
    List<Expense> findByDescriptionContaining(String search);
    Long countByNameContaining(String search);
    Long deleteByNameStartingWith(String search);
     void deleteById(Long id);
}

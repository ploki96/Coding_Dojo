package com.timothywang.dojoOverflow.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.timothywang.dojoOverflow.models.Question;
import com.timothywang.dojoOverflow.repositories.QuestionRepository;

@Service
public class QuestionService {
	private final QuestionRepository repo;
	
	public QuestionService(QuestionRepository repo) {
		this.repo = repo;
	}
	
	public List<Question> allQuestions() {
		return repo.findAll();
	}
	
	public Question createQuestion(Question q) {
		return repo.save(q);
	}
	
	public Question findQuestion(Long id) {
		Optional<Question> optionalQuestion = repo.findById(id);
		if (optionalQuestion.isPresent()) {
			return optionalQuestion.get();
		}
		else {
			return null;
		}
	}
	
	public Question updateQuestion(Question q) {
		return this.repo.save(q);
	}

	public void deleteQuestion(Long id) {
		this.repo.deleteById(id);
	}
}
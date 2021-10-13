package com.timothywang.dojoOverflow.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.timothywang.dojoOverflow.models.Answer;
import com.timothywang.dojoOverflow.repositories.AnswerRepository;

@Service
public class AnswerService {
	private final AnswerRepository repo;
	
	public AnswerService(AnswerRepository repo) {
		this.repo = repo;
	}
	
	public List<Answer> allAnswers() {
		return repo.findAll();
	}
	
	public Answer createAnswer(Answer ans) {
		return repo.save(ans);
	}
	
	public Answer findAnswer(Long id) {
		Optional<Answer> optionalAnswer = repo.findById(id);
		if (optionalAnswer.isPresent()) {
			return optionalAnswer.get();
		}
		else {
			return null;
		}
	}
	
	public Answer updateAnswer(Answer ans) {
		return this.repo.save(ans);
	}
	
	public void deleteAnswer(Long id) {
		this.repo.deleteById(id);
	}
}
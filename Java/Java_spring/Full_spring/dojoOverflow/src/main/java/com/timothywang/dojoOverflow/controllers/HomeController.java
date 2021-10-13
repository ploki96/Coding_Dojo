package com.timothywang.dojoOverflow.controllers;

import java.util.Arrays;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.timothywang.dojoOverflow.models.Answer;
import com.timothywang.dojoOverflow.models.Question;
import com.timothywang.dojoOverflow.models.Tag;
import com.timothywang.dojoOverflow.services.AnswerService;
import com.timothywang.dojoOverflow.services.QuestionService;
import com.timothywang.dojoOverflow.services.TagService;

@Controller
public class HomeController {
	private final AnswerService aService;
	private final QuestionService qService;
	private final TagService tService;
	
	public HomeController(AnswerService a, QuestionService q, TagService t) {
		this.aService = a;
		this.qService = q;
		this.tService = t;
	}
	
	@RequestMapping("/questions")
	public String showQuestions(Model model) {
		model.addAttribute("questions", qService.allQuestions());
		return "dashboard.jsp";
	}
	
	@RequestMapping("/questions/new")
	public String showNewQuestion() {
		return "newQuestion.jsp";
	}
	
	@PostMapping("/answers/{id}/new")
	public String createAnswer(@PathVariable Long id, @Valid @ModelAttribute("answer") Answer answer, BindingResult result, Model model) {
		if(result.hasErrors()) {
			model.addAttribute("question", qService.findQuestion(id));
			return "question.jsp";
		}else {
			Question q = qService.findQuestion(id);
			answer.setQuestion(q);
			aService.createAnswer(answer);
			return "redirect:/questions/"+id;
		}
	}
	
	@RequestMapping("/questions/{id}")
	public String showQuestion(@PathVariable("id") Long id, Model model, @ModelAttribute("answer") Answer answer) {
		model.addAttribute("question", qService.findQuestion(id));
		return "question.jsp";
	}
	
	@PostMapping("/questions/new")
	public String createQuestion(@RequestParam("question") String question, @RequestParam("tags") String tags, RedirectAttributes redirectAttributes) {
		//Check to make sure question isn't empty
		if(question.isEmpty()) {
			redirectAttributes.addFlashAttribute("error", "Question cannot be empty");
			return "redirect:/questions/new";
		}
		Question q = new Question(question);
		//Make sure tags are present
		if(!tags.isEmpty()) {
			String[] allTags = tags.split(",");
			System.out.println(Arrays.toString(allTags));
			if(allTags.length > 3) {
				redirectAttributes.addFlashAttribute("error", "You can only add 3 tags at most");
				return "redirect:/questions/new";
			}
			for(String tag : allTags) {
				Tag t = tService.findBySubject(tag);
				if(t != null) {
					q.addTag(t);
				}else {
					Tag newTag = new Tag(tag.trim());
					tService.createTag(newTag);
					q.addTag(newTag);
				}
			}
		}
		qService.createQuestion(q);
		return "redirect:/questions";
	}
}
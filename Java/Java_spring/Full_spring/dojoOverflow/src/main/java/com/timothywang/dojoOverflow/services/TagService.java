package com.timothywang.dojoOverflow.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.timothywang.dojoOverflow.models.Tag;
import com.timothywang.dojoOverflow.repositories.TagRepository;

@Service
public class TagService {
	private final TagRepository repo;
	
	public TagService(TagRepository repo) {
		this.repo = repo;
	}
	
	public List<Tag> allTags() {
		return repo.findAll();
	}
	
	public Tag createTag(Tag tag) {
		return repo.save(tag);
	}
	
	public Tag findTag(Long id) {
		Optional<Tag> optionalTag = repo.findById(id);
		if (optionalTag.isPresent()) {
			return optionalTag.get();
		}
		else {
			return null;
		}
	}
	
	public Tag updateTag(Tag tag) {
		return this.repo.save(tag);
	}
	
	public void deleteTag(Long id) {
		this.repo.deleteById(id);
	}
	
	public Tag findBySubject(String subject) {
		Optional<Tag> t = repo.findBySubject(subject);
		if(t.isPresent()) {
			System.out.println("Found: " + subject);
			return t.get();
		}else {
			System.out.println("Did not find: " + subject);
			return null;
		}
				
	}
}
package com.timothywang.dojoOverflow.models;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;
import javax.validation.constraints.Size;

import org.springframework.format.annotation.DateTimeFormat;


@Entity
@Table(name="questions")
public class Question {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String question;
	@Column(updatable=false)
	@DateTimeFormat(pattern="yyyy-MM-dd")
	private Date createdAt;
	@DateTimeFormat(pattern="yyyy-MM-dd")
	private Date updatedAt;
	
	
	@ManyToMany(fetch = FetchType.LAZY)
	@JoinTable(
		name = "tags_questions",
		joinColumns = @JoinColumn(name = "question_id"),
		inverseJoinColumns = @JoinColumn(name = "tag_id")
	)
	@Size(max=3)
	private List<Tag> tags = new ArrayList<Tag>();
	
	@OneToMany(mappedBy="question", fetch = FetchType.LAZY)
	private List<Answer> answers;
	
	public Question() {}
	
	public Question(String question) {
		this.setQuestion(question);
	}
	
	
	
	public Question(Long id, String question, Date createdAt, Date updatedAt, @Size(max = 3) List<Tag> tags,
			List<Answer> answers) {
		super();
		this.id = id;
		this.question = question;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
		this.tags = tags;
		this.answers = answers;
	}

	@PrePersist
	protected void onCreate() {
		this.createdAt = new Date();
	}
	@PreUpdate
	protected void onUpdate() {
		this.updatedAt = new Date();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getQuestion() {
		return question;
	}

	public void setQuestion(String question) {
		this.question = question;
	}

	public Date getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}

	public Date getUpdatedAt() {
		return updatedAt;
	}

	public void setUpdatedAt(Date updatedAt) {
		this.updatedAt = updatedAt;
	}

	public List<Tag> getTags() {
		return tags;
	}

	public void setTags(List<Tag> tags) {
		this.tags = tags;
	}
	
	public void addTag(Tag tag) {
		this.tags.add(tag);
	}
	
	public String showTags() {
		String tagsStr ="";
		for(Tag tag: this.getTags()) {
			tagsStr += tag.getSubject() + ", ";
		}
		return tagsStr;
	}
}

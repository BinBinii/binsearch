package com.binbini.binsearch.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Link {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private String username;
	private String link1Title;
	private String link1Content;
	private String link2Title;
	private String link2Content;
	private String link3Title;
	private String link3Content;
	private String link4Title;
	private String link4Content;
	private String link5Title;
	private String link5Content;
	private String link6Title;
	private String link6Content;
	private String link7Title;
	private String link7Content;
	private String link8Title;
	private String link8Content;
	private String link9Title;
	private String link9Content;
	private String link10Title;
	private String link10Content;
	
	public Link() {
		
	}

	public Link(long id,String username,String link1Title, String link1Content, String link2Title, String link2Content, String link3Title,
			String link3Content, String link4Title, String link4Content, String link5Title, String link5Content,
			String link6Title, String link6Content, String link7Title, String link7Content, String link8Title,
			String link8Content, String link9Title, String link9Content, String link10Title, String link10Content) {
		this.id=id;
		this.username = username;
		this.link1Title = link1Title;
		this.link1Content = link1Content;
		this.link2Title = link2Title;
		this.link2Content = link2Content;
		this.link3Title = link3Title;
		this.link3Content = link3Content;
		this.link4Title = link4Title;
		this.link4Content = link4Content;
		this.link5Title = link5Title;
		this.link5Content = link5Content;
		this.link6Title = link6Title;
		this.link6Content = link6Content;
		this.link7Title = link7Title;
		this.link7Content = link7Content;
		this.link8Title = link8Title;
		this.link8Content = link8Content;
		this.link9Title = link9Title;
		this.link9Content = link9Content;
		this.link10Title = link10Title;
		this.link10Content = link10Content;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}
	
	public String getLink1Title() {
		return link1Title;
	}

	public void setLink1Title(String link1Title) {
		this.link1Title = link1Title;
	}

	public String getLink1Content() {
		return link1Content;
	}

	public void setLink1Content(String link1Content) {
		this.link1Content = link1Content;
	}

	public String getLink2Title() {
		return link2Title;
	}

	public void setLink2Title(String link2Title) {
		this.link2Title = link2Title;
	}

	public String getLink2Content() {
		return link2Content;
	}

	public void setLink2Content(String link2Content) {
		this.link2Content = link2Content;
	}

	public String getLink3Title() {
		return link3Title;
	}

	public void setLink3Title(String link3Title) {
		this.link3Title = link3Title;
	}

	public String getLink3Content() {
		return link3Content;
	}

	public void setLink3Content(String link3Content) {
		this.link3Content = link3Content;
	}

	public String getLink4Title() {
		return link4Title;
	}

	public void setLink4Title(String link4Title) {
		this.link4Title = link4Title;
	}

	public String getLink4Content() {
		return link4Content;
	}

	public void setLink4Content(String link4Content) {
		this.link4Content = link4Content;
	}

	public String getLink5Title() {
		return link5Title;
	}

	public void setLink5Title(String link5Title) {
		this.link5Title = link5Title;
	}

	public String getLink5Content() {
		return link5Content;
	}

	public void setLink5Content(String link5Content) {
		this.link5Content = link5Content;
	}

	public String getLink6Title() {
		return link6Title;
	}

	public void setLink6Title(String link6Title) {
		this.link6Title = link6Title;
	}

	public String getLink6Content() {
		return link6Content;
	}

	public void setLink6Content(String link6Content) {
		this.link6Content = link6Content;
	}

	public String getLink7Title() {
		return link7Title;
	}

	public void setLink7Title(String link7Title) {
		this.link7Title = link7Title;
	}

	public String getLink7Content() {
		return link7Content;
	}

	public void setLink7Content(String link7Content) {
		this.link7Content = link7Content;
	}

	public String getLink8Title() {
		return link8Title;
	}

	public void setLink8Title(String link8Title) {
		this.link8Title = link8Title;
	}

	public String getLink8Content() {
		return link8Content;
	}

	public void setLink8Content(String link8Content) {
		this.link8Content = link8Content;
	}

	public String getLink9Title() {
		return link9Title;
	}

	public void setLink9Title(String link9Title) {
		this.link9Title = link9Title;
	}

	public String getLink9Content() {
		return link9Content;
	}

	public void setLink9Content(String link9Content) {
		this.link9Content = link9Content;
	}

	public String getLink10Title() {
		return link10Title;
	}

	public void setLink10Title(String link10Title) {
		this.link10Title = link10Title;
	}

	public String getLink10Content() {
		return link10Content;
	}

	public void setLink10Content(String link10Content) {
		this.link10Content = link10Content;
	}
	
	
}

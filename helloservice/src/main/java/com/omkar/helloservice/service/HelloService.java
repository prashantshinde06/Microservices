package com.omkar.helloservice.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.omkar.helloservice.dto.HelloDto;
import com.omkar.helloservice.entity.HelloEntity;
import com.omkar.helloservice.repo.HelloRepo;

@Service
public class HelloService {

	@Autowired
	private HelloRepo helloRepo;

	public HelloDto saveData(HelloDto requestDto) {

		HelloDto helloDto = new HelloDto();
		try {

			HelloEntity helloEntity = helloRepo.save(new HelloEntity(requestDto.getMessage()));

			helloDto.setId(helloEntity.getId());
			helloDto.setMessage(requestDto.getMessage());
			helloDto.setStatus("SUCCESS");
			
		} catch (Exception e) {
			helloDto.setMessage(e.getMessage());
			helloDto.setStatus("ERROR");
		}
		return helloDto;
	}
}

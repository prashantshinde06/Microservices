package com.omkar.helloservice.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.omkar.helloservice.dto.HelloDto;
import com.omkar.helloservice.service.HelloService;

@RestController
public class AppController {

	@Autowired
	private HelloService helloService;

	@PostMapping("/api/data/save")
	public ResponseEntity<HelloDto> saveData(@RequestBody HelloDto requestDto) {

		HelloDto helloDto = helloService.saveData(requestDto);

		if ("SUCCESS".equals(helloDto.getStatus()))
			return new ResponseEntity<HelloDto>(helloDto, HttpStatus.OK);
		else
			return new ResponseEntity<HelloDto>(helloDto, HttpStatus.INTERNAL_SERVER_ERROR);

	}
}

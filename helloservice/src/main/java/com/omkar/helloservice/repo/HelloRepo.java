package com.omkar.helloservice.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.omkar.helloservice.entity.HelloEntity;

@Repository
public interface HelloRepo extends JpaRepository<HelloEntity, Long>{

	//HelloEntity saveMessage(HelloEntity helloEntity);
	
	//HelloEntity findOneById(Long id);
	
	//List<HelloEntity> findAll();
	
	
}

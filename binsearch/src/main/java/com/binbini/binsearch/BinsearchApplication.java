package com.binbini.binsearch;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@MapperScan("com.binbini.binsearch.mapper")
@SpringBootApplication
public class BinsearchApplication {

	public static void main(String[] args) {
		SpringApplication.run(BinsearchApplication.class, args);
	}

}

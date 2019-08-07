package com.in28minutes.fullstack.springboot.maven.crud.springbootcrudfullstackwithmaven;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import java.util.concurrent.ExecutionException;

import io.rollout.configuration.RoxContainer;
import io.rollout.flags.RoxFlag;
import io.rollout.rox.server.Rox;

@SpringBootApplication
public class SpringBootFullStackCrudFullStackWithMavenApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringBootFullStackCrudFullStackWithMavenApplication.class, args);
	}

}

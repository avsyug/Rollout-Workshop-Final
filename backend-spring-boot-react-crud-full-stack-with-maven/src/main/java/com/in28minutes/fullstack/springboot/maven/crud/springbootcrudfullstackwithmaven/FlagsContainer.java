package com.in28minutes.fullstack.springboot.maven.crud.springbootcrudfullstackwithmaven;

import io.rollout.rox.server.Rox;
import io.rollout.configuration.RoxContainer;
import io.rollout.flags.RoxFlag;
import java.util.concurrent.ExecutionException;

public class FlagsContainer implements RoxContainer {
	public RoxFlag addFlag = new RoxFlag();
}
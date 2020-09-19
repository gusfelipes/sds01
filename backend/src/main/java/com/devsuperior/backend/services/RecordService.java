package com.devsuperior.backend.services;

import java.time.Instant;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.backend.dto.RecordDTO;
import com.devsuperior.backend.dto.RecordInsertDTO;
import com.devsuperior.backend.entities.Game;
import com.devsuperior.backend.entities.Record;
import com.devsuperior.backend.repositories.GameRepository;
import com.devsuperior.backend.repositories.RecordRepository;

@Service
public class RecordService {

	@Autowired
	private RecordRepository repository;

	@Autowired
	private GameRepository gameRepository;

	@Transactional(readOnly = true)
	public RecordDTO insert(RecordInsertDTO dto) {

		Record entity = new Record();

		entity.setName(dto.getName());
		entity.setAge(dto.getAge());
		entity.setMoment(Instant.now());

		Game game = gameRepository.getOne(dto.getGameId());
		entity.setGame(game);

		entity = repository.save(entity);

		return new RecordDTO(entity);
	}

}

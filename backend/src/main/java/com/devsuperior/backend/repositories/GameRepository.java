package com.devsuperior.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.backend.entities.Game;

public interface GameRepository extends JpaRepository<Game, Long>{

}

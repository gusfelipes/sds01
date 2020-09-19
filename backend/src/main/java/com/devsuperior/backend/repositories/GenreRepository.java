package com.devsuperior.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.backend.entities.Genre;

public interface GenreRepository extends JpaRepository<Genre, Long>{

}

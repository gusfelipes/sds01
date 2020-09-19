package com.devsuperior.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.devsuperior.backend.entities.Genre;

@Repository
public interface GenreRepository extends JpaRepository<Genre, Long> {

}

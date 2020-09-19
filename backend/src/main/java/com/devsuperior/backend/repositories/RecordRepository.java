package com.devsuperior.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.backend.entities.Genre;
import com.devsuperior.backend.entities.Record;

public interface RecordRepository extends JpaRepository<Record, Long>{

}

package com.bezkoder.spring.jwt.mongodb.repository;

import com.bezkoder.spring.jwt.mongodb.models.Categorie;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface CategoryRepository extends MongoRepository<Categorie, String> {

}

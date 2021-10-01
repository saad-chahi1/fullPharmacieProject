package com.bezkoder.spring.jwt.mongodb.controllers;

import com.bezkoder.spring.jwt.mongodb.models.Categorie;
import com.bezkoder.spring.jwt.mongodb.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/")
public class CategoryController {
    @Autowired
    private CategoryRepository categoryRepository;

    @GetMapping("/categories")
    @CrossOrigin(origins = "http://localhost:4200")
    public List<Categorie> getAllCategories(){
        return categoryRepository.findAll();
    }

    @PostMapping("/categories")
    @CrossOrigin(origins = "http://localhost:4200")
    public Categorie createCategory(@RequestBody Categorie categorie){
        return categoryRepository.save(categorie);
    }

}

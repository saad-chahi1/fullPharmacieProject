package com.bezkoder.spring.jwt.mongodb.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@Data @AllArgsConstructor @NoArgsConstructor @ToString
public class Product {
    @Id
    private String id;
    private String name;
    private String sousName;
    private String description;
    private String image;
    private double price;
    /*@DBRef
    private Category category;*/
}

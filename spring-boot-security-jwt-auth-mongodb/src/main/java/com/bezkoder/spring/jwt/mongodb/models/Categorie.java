package com.bezkoder.spring.jwt.mongodb.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.Collection;

@Document
@Data @AllArgsConstructor @NoArgsConstructor
public class Categorie {
    @Id
    private String id;
    private String name;
    private String description;
    @DBRef
    private Collection<Product> products = new ArrayList<>();

    //on a un souci d'étre tomber dans un boucle infini c'est pour ca on a implementé cette méthode et pas la générer directement
    @Override
    public String toString() {
        return "Category{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                '}';
    }
}

package com.example.NunesSports.product;

public record ProductResponseDTO(Long id, String name, String description, String image, Integer price) {

    public ProductResponseDTO(Product product){
        this(product.getId(), product.getName(), product.getDescription(), product.getImage(), product.getPrice());
    }
}

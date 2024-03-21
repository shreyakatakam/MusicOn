package com.example.VehicleService.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Document
public class User {


    @Id

    private String email;
    private String name,phoNo,address;
    private List<Vehicle> vehicles;
}

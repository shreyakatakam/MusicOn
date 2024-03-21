package com.example.VehicleService.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Document
public class Vehicle {

    @Id
//    private String vehicleId;
//    private String vehicleName;
//    private String category;
//    private String fuelType;
      private String songId;
      private String songName;
      private String singer;
      private String moviename;




}

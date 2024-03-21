package com.example.VehicleService.repository;

import com.example.VehicleService.domain.Vehicle;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface AdminVehicleRepository extends MongoRepository<Vehicle,String> {

    Vehicle findByVehicleId(String vehicleId);
}

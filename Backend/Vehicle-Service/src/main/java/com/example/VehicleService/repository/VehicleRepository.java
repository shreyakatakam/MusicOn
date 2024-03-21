package com.example.VehicleService.repository;

import com.example.VehicleService.domain.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface VehicleRepository extends MongoRepository<User,String> {
}

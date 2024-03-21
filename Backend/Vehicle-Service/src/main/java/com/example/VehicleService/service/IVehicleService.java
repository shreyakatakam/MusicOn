package com.example.VehicleService.service;

import com.example.VehicleService.domain.User;
import com.example.VehicleService.domain.Vehicle;
import com.example.VehicleService.exception.VehicleNotFound;

import java.util.List;

public interface IVehicleService {


    public String deleteVehicle(String emailId) throws VehicleNotFound;


public User addVehicle(User user);

//1.Admin
    public Vehicle AddAdminVehicles(Vehicle vehicle);
    public  Vehicle updateAdminVehicle(Vehicle vehicle,String vehicleId);
   public List<Vehicle> getAdminAllVehicles();
   public Vehicle updateAdminVehiclesById(String vehicleId);

   public String deleteById2(String vehicleId);

}

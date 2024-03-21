package com.example.VehicleService.service;

import com.example.VehicleService.domain.User;
import com.example.VehicleService.domain.Vehicle;
import com.example.VehicleService.exception.VehicleNotFound;
import com.example.VehicleService.repository.AdminVehicleRepository;
import com.example.VehicleService.repository.VehicleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Iterator;
import java.util.List;

@Service
public class VehicleServiceImpl implements IVehicleService {

    @Autowired
    private VehicleRepository vehicleRepository;
    @Autowired
    private AdminVehicleRepository adminVehicleRepository;





    @Override
    public String deleteVehicle(String email) throws VehicleNotFound {
        if (vehicleRepository.findById(email).isEmpty()) {
            throw new VehicleNotFound();
        }
        vehicleRepository.deleteById(email);

        return "vehicle deleted successfully";
    }

    @Override
    public User addVehicle(User user) {
        return vehicleRepository.insert(user);
    }


    //1.admin
    @Override
    public Vehicle AddAdminVehicles(Vehicle vehicle) {
        return adminVehicleRepository.insert(vehicle);
    }

    //2.
    @Override
    public Vehicle updateAdminVehicle(Vehicle vehicle,String vehicleId) {
//        Vehicle retrievedUser = adminVehicleRepository.findById(vehicle.getVehicleId()).get();
//        if (vehicle.getVehicleName() != null) {
//            retrievedUser.setVehicleName(retrievedUser.getVehicleName());
//        }
//
//        if (vehicle.getCategory() != null) {
//            retrievedUser.setCategory(retrievedUser.getCategory());
//        }
//        if (vehicle.getFuelType() != null) {
//            retrievedUser.setFuelType(retrievedUser.getFuelType());
//        }
//
        return adminVehicleRepository.save(vehicle);
    }


    //3.

    @Override
    public List<Vehicle> getAdminAllVehicles() {
        return adminVehicleRepository.findAll();
    }


    //4.
    @Override
    public Vehicle updateAdminVehiclesById(String vehicleId) {
        return adminVehicleRepository.findByVehicleId(vehicleId);
    }

    @Override
    public String deleteById2(String vehicleId) {
         adminVehicleRepository.deleteById(vehicleId);
        return "deleted ";
    }
}




package com.example.VehicleService.controller;

import com.example.VehicleService.domain.User;
import com.example.VehicleService.domain.Vehicle;
import com.example.VehicleService.exception.VehicleNotFound;
import com.example.VehicleService.service.IVehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;


@RestController
@RequestMapping("/veh/v1")

@CrossOrigin(origins = "*",exposedHeaders = "*")
public class VehicleController {
    @Autowired
    private IVehicleService iVehicleService;



    @PostMapping("/add")
    public ResponseEntity<?> addVehicleData(@RequestBody User user)
    {
        return new ResponseEntity<>(iVehicleService.addVehicle(user),HttpStatus.CREATED);
    }

    @DeleteMapping("/delete/{vehicleId}")
    public ResponseEntity<?> deleteVehicle(@PathVariable String vehicleId,HttpServletRequest request) {
        String role = (String) request.getAttribute("b");

        if (role.equals("Admin")) {
            return new ResponseEntity<>(iVehicleService.deleteById2(vehicleId), HttpStatus.CREATED);
        } else
        {
            return new ResponseEntity<>("not accessed to user",HttpStatus.OK);
        }
    }






    //1.
    @PostMapping("/addAdminVehicle") //http://localhost:8099/veh/v1/addAdminVehicle
    public ResponseEntity<?> addedByAdminVehicle(HttpServletRequest request,@RequestBody Vehicle vehicle) {
        String role = (String) request.getAttribute("b");

        if (role.equals("Admin")) {

            return new ResponseEntity<>(iVehicleService.AddAdminVehicles(vehicle), HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>("only admin can access",HttpStatus.BAD_REQUEST);
        }

    }

    //2.
    @PutMapping("/updateAdminVehicles/{vehicleId}") //http://localhost:8099/veh/v1/updateAdminVehicles
    public ResponseEntity<?> updateAdminVehicles(HttpServletRequest request,@RequestBody Vehicle vehicle,@PathVariable String vehicleId) {
        String role = (String) request.getAttribute("b");
        if (role.equals("Admin"))
        {
            return new ResponseEntity<>(iVehicleService.updateAdminVehicle(vehicle,vehicleId), HttpStatus.OK);
        }
        else
        {
            return new ResponseEntity<>("only admin can access",HttpStatus.BAD_REQUEST);
        }
    }


    //3.User
    @GetMapping("/getAdminVehicles")  //http://localhost:8099/veh/v1/getAdminVehicles
    public ResponseEntity<?> getAllVehicles() {
        return new ResponseEntity(iVehicleService.getAdminAllVehicles(),HttpStatus.OK);
    }


    //4.
    @GetMapping("/getUpdatedVehicles/{vehicleId}")  //http://localhost:8099/veh/v1/getUpdatedVehicles
    public ResponseEntity<?> getUpdatedVehicle(@PathVariable String vehicleId)
    {
        return new ResponseEntity<>(iVehicleService.updateAdminVehiclesById(vehicleId),HttpStatus.OK);
    }


    //5.
    @DeleteMapping("/deleteVehicle")  //http://localhost:8099/veh/v1/deleteVehicle
    public ResponseEntity<?> deleteVehicle(HttpServletRequest request,@RequestBody User user) throws VehicleNotFound
    {
        return new ResponseEntity<>(iVehicleService.deleteVehicle(user.getEmail()),HttpStatus.BAD_REQUEST);
    }



}

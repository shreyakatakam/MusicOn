package com.example.VehicleService.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.NOT_FOUND,reason = "Vehicle Not Found")
public class VehicleNotFound extends Exception {
}

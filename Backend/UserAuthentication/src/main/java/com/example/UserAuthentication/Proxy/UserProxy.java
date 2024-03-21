package com.example.UserAuthentication.Proxy;


import com.example.UserAuthentication.domain.UserDataTransferObject;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@FeignClient(name = "vehicle-service",url = "localhost:8099")
public interface UserProxy {


    @PostMapping("veh/v1/add")
    public ResponseEntity sendUserDtoToProductApp(@RequestBody UserDataTransferObject userDataTransferObject) ;


}

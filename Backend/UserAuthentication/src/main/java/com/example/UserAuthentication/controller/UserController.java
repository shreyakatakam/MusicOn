package com.example.UserAuthentication.controller;

import com.example.UserAuthentication.domain.SignUpData;
import com.example.UserAuthentication.domain.User;
import com.example.UserAuthentication.service.ISecurityTokenGenerator;
import com.example.UserAuthentication.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth/v1")

@CrossOrigin(origins="*",exposedHeaders = "*")
//@CrossOrigin(origins = "http://localhost:4200")

public class UserController {
    @Autowired
    private IUserService iUserService;
    @Autowired
    private ISecurityTokenGenerator iSecurityTokenGenerator;

    @PostMapping("/register")  //http://localhost:8088/auth/v1/register
    public ResponseEntity<?> register(@RequestBody SignUpData signUpData)
    {
        signUpData.setRole("Role_User");
        return new ResponseEntity<>(iUserService.registerUserUsingFC(signUpData), HttpStatus.CREATED) ;
    }

    @PostMapping ("/login")      //        http://localhost:8088/auth/v1/login
    public ResponseEntity<?> login(@RequestBody User user)
    {
        User retrievedUser= iUserService.checkLogin(user.getEmail(),user.getPassword());
        if(retrievedUser!=null)
        {
            return new ResponseEntity<>(iSecurityTokenGenerator.generateToken(retrievedUser),HttpStatus.CREATED);
        }
        else
        {
            return new ResponseEntity("Email or Password you entered are Incorrect..!",HttpStatus.OK);
        }
    }
}

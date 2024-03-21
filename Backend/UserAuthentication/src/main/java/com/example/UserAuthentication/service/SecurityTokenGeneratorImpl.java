package com.example.UserAuthentication.service;

import com.example.UserAuthentication.domain.User;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

@Service
public class SecurityTokenGeneratorImpl implements ISecurityTokenGenerator{
    @Override
    public Map<String, String> generateToken(User user) {
        Map<String,String> result=new HashMap<>();
        Map<String,Object> userData=new HashMap<>();

        userData.put("userEmail",user.getEmail());
        userData.put("userRole",user.getRole());

        String myToken = Jwts.builder()
                .setClaims(userData)
                .setIssuedAt(new Date())
                .signWith(SignatureAlgorithm.HS512,"secretKeyVehicle")
                .compact();

        result.put("Token",myToken);
        result.put("Message","User logged in Successfully");
        result.put("userEmail", user.getEmail());
        result.put("userRole", user.getRole());

        return result;
    }
}

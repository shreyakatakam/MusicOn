package com.example.UserAuthentication.service;

import com.example.UserAuthentication.domain.User;

import java.util.Map;

public interface ISecurityTokenGenerator {
    public Map<String,String> generateToken(User user);
}

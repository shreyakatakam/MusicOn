package com.example.UserAuthentication.service;

import com.example.UserAuthentication.domain.SignUpData;
import com.example.UserAuthentication.domain.User;

public interface IUserService {

    public User registerUser(User user);
    public User checkLogin(String email,String password);

    public User registerUserUsingFC(SignUpData signUpData);
}

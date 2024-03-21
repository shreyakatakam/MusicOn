package com.example.UserAuthentication.service;

import com.example.UserAuthentication.Proxy.UserProxy;
import com.example.UserAuthentication.domain.SignUpData;
import com.example.UserAuthentication.domain.User;
import com.example.UserAuthentication.domain.UserDataTransferObject;
import com.example.UserAuthentication.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements IUserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private UserProxy userProxy;
    @Override
    public User registerUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public User checkLogin(String email, String password) {
        return userRepository.findByEmailAndPassword(email,password);
    }

    @Override
    public User registerUserUsingFC(SignUpData signUpData) {
        UserDataTransferObject userDataTransferObject=new UserDataTransferObject(signUpData.getEmail(),signUpData.getName(),signUpData.getPhoNo(),signUpData.getAddress());
        User user=new User(signUpData.getEmail(),signUpData.getPassword(),signUpData.getRole());
        System.out.println("problem in reg");
        ResponseEntity response =userProxy.sendUserDtoToProductApp(userDataTransferObject);
        System.out.println(response);

        User user1 = userRepository.save(user);

        return user1;

    }
}

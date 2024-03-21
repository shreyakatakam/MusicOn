package com.example.UserAuthentication.domain;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@EqualsAndHashCode
public class SignUpData {
    private String email;
    private String password,role;
    private String name,phoNo,address;
}

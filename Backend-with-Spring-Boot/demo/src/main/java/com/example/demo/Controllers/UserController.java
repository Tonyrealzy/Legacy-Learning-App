package com.example.demo.Controllers;

import com.example.demo.Entity.User;
import com.example.demo.Entity.UserRole;
import com.example.demo.Repository.UserRepository;
import com.example.demo.Services.UserServiceImpl;
import com.example.demo.Exceptions.UsernameAlreadyExistsException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class UserController {
    @Autowired
    private UserServiceImpl userServiceImpl;
    @Autowired
    private UserRepository userRepository;

    @PostMapping("/registerStudent")
    public ResponseEntity<User> registerStudent(@RequestBody User user) throws UsernameAlreadyExistsException {
        user.setRole(UserRole.STUDENT);
        user.setApproved(true);
        User registeredUser = userServiceImpl.registerUser(user);
        return ResponseEntity.ok(registeredUser);
    }
}


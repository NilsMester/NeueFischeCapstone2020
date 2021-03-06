package de.neuefische.capstoneproject.tabLog.controller;

import de.neuefische.capstoneproject.tabLog.dto.LoginDto;
import de.neuefische.capstoneproject.tabLog.security.JwtUtilities;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;

@RestController
@RequestMapping("auth/login")
public class LoginController {

    private final AuthenticationManager authenticationManager;
    private final JwtUtilities jwtUtilities;

    @Autowired
    public LoginController(AuthenticationManager authenticationManager, JwtUtilities jwtUtilities) {
        this.authenticationManager = authenticationManager;
        this.jwtUtilities = jwtUtilities;
    }

    @PostMapping
    public String login(@RequestBody LoginDto loginDto){
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginDto.getEmail(),loginDto.getPassword()));
        return jwtUtilities.createJwtToken(loginDto.getEmail(),new HashMap<>());
    }
}

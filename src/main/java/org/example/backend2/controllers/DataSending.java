package org.example.backend2.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DataSending {

    @GetMapping("/data")
    public String data() {
        return "we are from spring ";
    }
}

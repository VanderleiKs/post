package post.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import post.entities.User;
import post.services.UserService;

import java.net.URI;

@RestController
@RequestMapping("/login")
public class UserController {

    @Autowired
    private UserService service;

    @PostMapping("/new")
    public ResponseEntity<User> insert(@RequestBody User user){
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(user.getId()).toUri();

        return ResponseEntity.created(uri).body(service.insert(user));
    }

    @PostMapping
    public ResponseEntity<User> login(@RequestBody User user) {
        return ResponseEntity.ok().body(service.login(user));
    }

}

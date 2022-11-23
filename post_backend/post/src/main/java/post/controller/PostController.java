package post.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import post.entities.Post;
import post.services.PostService;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/posts")
public class PostController {

    @Autowired
    private PostService postService;

    @GetMapping
    public ResponseEntity<List<Post>> findAll() {
        return ResponseEntity.ok().body(postService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<String> findById() {
        return ResponseEntity.ok().body("<html><h1>Ola mundo</h1</html>");
    }


    @PostMapping
    public ResponseEntity<Post> insert(@RequestBody Post post){
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(post.getId()).toUri();
        post = postService.insert(post);
        return ResponseEntity.created(uri).body(post);
    }

}
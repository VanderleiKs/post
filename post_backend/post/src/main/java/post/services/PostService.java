package post.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import post.entities.Post;
import post.repository.PostRepository;

import java.util.List;

@Service
public class PostService {

    @Autowired
    private PostRepository postRepository;

    public List<Post> findAll(){
        return postRepository.findAll();
    }

    public Post findById(Long id){
        return postRepository.findById(id).orElseThrow(() -> new RuntimeException("not found"));
    }

    public Post insert(Post post){
        return postRepository.save(post);
    }




}

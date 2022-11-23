package post.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import post.entities.User;
import post.repository.UserRepository;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository repository;

    @Transactional
    public User insert(User user){
        try {
            Optional<User> consultUser = repository.findById(user.getId());
            if (consultUser.isPresent()) {
                throw new RuntimeException("Email already registered");
            } else {
                user = repository.save(user);
            }
            return user;
        }
        catch (DataIntegrityViolationException ex){
            throw new RuntimeException("Erro ao salvar");
        }
    }

    @Transactional
    public User login(User user){
            Optional<User> consultUser = repository.findByEmail(user.getEmail());
            return consultUser.get();
        }

}

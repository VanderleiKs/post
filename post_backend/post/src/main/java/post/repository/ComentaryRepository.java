package post.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import post.entities.Comentary;
import post.entities.Post;

@Repository
public interface ComentaryRepository extends JpaRepository<Comentary, Long> {
}

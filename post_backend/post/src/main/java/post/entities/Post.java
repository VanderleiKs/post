package post.entities;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String topic;
    @Column(columnDefinition = "TEXT")
    private String text;
    @OneToMany()
    private List<Comentary> comentaries = new ArrayList<>();

    public Post(){}

    public Post(Long id, String topic, String text, List<Comentary> comentaries) {
        this.id = id;
        this.topic = topic;
        this.text = text;
        this.comentaries = comentaries;
    }

    public Long getId() {
        return id;
    }

    public String getTopic() {
        return topic;
    }

    public void setTopic(String topic) {
        this.topic = topic;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public List<Comentary> getComentaries() {
        return comentaries;
    }

    public void setComentaries(List<Comentary> comentaries) {
        this.comentaries = comentaries;
    }
}

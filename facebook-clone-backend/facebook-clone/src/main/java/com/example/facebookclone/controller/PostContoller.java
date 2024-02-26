package com.example.facebookclone.controller;

import com.example.facebookclone.model.Post;
import com.example.facebookclone.service.PostService;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.Map;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/api/v1/post")
public class PostContoller {

    private PostService postService;

    public PostContoller(PostService postService){
        this.postService=postService;
    }

    @PostMapping
    public Post addPost(@RequestParam Map<String,String> requestParams) throws Exception {
        String strpost =requestParams.get("post");
        String email =requestParams.get("email");
        String name = requestParams.get("name");
        String file = requestParams.get("file");
        String profilePic = requestParams.get("profilePic");

        Post post = Post.builder()
                .file(file)
                .name(name)
                .email(email)
                .post(strpost)
                .profilePic(profilePic)
                .timeStamp(new Date().toString())
                .build();

        post = postService.addPost(post);
        return post;
    }

    public List<Post> getPost(){
        return postService.getPost();
    }
}

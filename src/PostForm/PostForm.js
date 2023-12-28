// PostForm.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../Action/actions";
import "./PostForm.css";
import { Center } from "@chakra-ui/react";

const PostForm = () => {
  const dispatch = useDispatch();
  const [post, setPost] = useState("");
  const userName = useSelector((state) => state.userName);

  console.log(userName, "userName");

  const handlePostSubmit = () => {
    dispatch(addPost({ id: Date.now(), message: post, userName: userName }));
    setPost("");
  };

  return (
    <div>
      <Center>
        <input
          value={post}
          onChange={(e) => setPost(e.target.value)}
          class="text"
          placeholder="Write your thoughts..."
        />
      </Center>
      <br />
      <button onClick={handlePostSubmit} class="postButton">
        Post
      </button>
    </div>
  );
};

export default PostForm;

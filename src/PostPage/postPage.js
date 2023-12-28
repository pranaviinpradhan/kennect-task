import React from "react";
import { useSelector } from "react-redux";
import PostForm from "../PostForm/PostForm";
import "./postPage.css";
import PostList from "../PostList/postList";
import SearchBar from "../searchBar/searchBar";

export default function PostPage() {
  const userName = useSelector((state) => state.userName);

  return (
    <div>
      <div style={{ float: "right" }}>
        <SearchBar />
      </div>
      <h1>What's on your mind, {userName.userName}?</h1>
      <br />
      <PostForm />

      <PostList />
    </div>
  );
}

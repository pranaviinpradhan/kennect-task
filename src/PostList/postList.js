// PostList.js
import React from "react";
import { useSelector } from "react-redux";
import "./postList.css";
import { Center } from "@chakra-ui/react";
import CommentForm from "../commentsForm/commentForm";

const PostList = () => {
  const posts = useSelector((state) => state.posts);
  const searchTerm = useSelector((state) => state.search);
  const userName = useSelector((state) => state.userName);

  // Filter posts based on the search term
  // const filteredPosts = posts.filter((post) =>
  //   // post.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //   post.message.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  const filterPostsAndComments = (post) => {
    // Check if post or any comment matches the search term
    const postMatches = post.message
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const commentsMatch =
      post.comments &&
      post.comments.some((comment) =>
        comment.text.toLowerCase().includes(searchTerm.toLowerCase())
      );

    return postMatches || commentsMatch;
  };

  const filteredPosts = posts.filter(filterPostsAndComments);

  return (
    <div>
      {filteredPosts.length > 0 ? (
        <>
          {filteredPosts.map((post) => (
            <Center>
              <div class="cookie-card">
                <span class="title">👤 {userName.userName}</span>
                <p class="description">{post.message}</p>
                {post.comments && (
                  <span>
                    {post.comments.map((comment, index) => (
                      <li
                        key={index}
                      >{`${userName.userName}: ${comment.text}`}</li>
                    ))}
                  </span>
                )}
                <CommentForm postId={post.id} />
              </div>
            </Center>
          ))}
        </>
      ) : (
        <p>No matching posts found.</p>
      )}
    </div>
  );
};

export default PostList;

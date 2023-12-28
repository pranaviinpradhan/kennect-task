// actions.js
export const addPost = (post) => ({
  type: "ADD_POST",
  payload: post,
});

export const setSearchTerm = (term) => ({
  type: "SET_SEARCH_TERM",
  payload: term,
});

export const userName = (userName) => ({
  type: "SET_USER_NAME",
  payload: userName,
});

export const addComment = (comment) => ({
  type: "ADD_COMMENT",
  payload: comment,
});

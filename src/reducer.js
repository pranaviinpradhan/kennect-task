// reducers.js
import { combineReducers } from "redux";

const postsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_POST':
      return [...state, action.payload];
    case 'ADD_COMMENT':
      return state.map((post) =>
        post.id === action.payload.postId
          ? { ...post, comments: [...(post.comments || []), action.payload.comment] }
          : post
      );
    default:
      return state;
  }
};


const searchReducer = (state = "", action) => {
  switch (action.type) {
    case "SET_SEARCH_TERM":
      return action.payload;
    default:
      return state;
  }
};

const setUserName = (state = "", action) => {
  switch (action.type) {
    case "SET_USER_NAME":
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  posts: postsReducer,
  search: searchReducer,
  userName: setUserName,
});

export default rootReducer;

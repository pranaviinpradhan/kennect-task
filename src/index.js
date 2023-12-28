// index.js
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostPage from "./PostPage/postPage";
import store from "./store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          {/* <Route path="home" element={<App />} /> */}

          <Route path="postPage" element={<PostPage />} />
        </Routes>
      </BrowserRouter>
      {/* <App /> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

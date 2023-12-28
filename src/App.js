// App.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Provider, useDispatch } from "react-redux";

import { Center } from "@chakra-ui/react";
import "./App.css";
import store from "./store";
import { userName } from "./Action/action";

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userNameState, setUserNameState] = useState("");

  const handleSubmit = () => {
    dispatch(userName({ userName: userNameState }));
    navigate("/postPage");
  };
  // dispatch(setUserName(userName));
  console.log(userNameState, "username in app.js");

  return (
    <Provider store={store}>
      <Center>
        <div>
          <h1>Welcome to the Post Feed!</h1>
          <h4>Enter Your Name To Continue: </h4>
          <input
            class="input"
            type="text"
            value={userNameState}
            onChange={(e) => {
              setUserNameState(e.target.value);
              console.log(e.target.value, "e.target");
            }}
          />
          <br />
          <Center>
            <button onClick={handleSubmit} class="button-1">
              Start Posting
            </button>
          </Center>
        </div>
      </Center>
    </Provider>
  );
};

export default App;

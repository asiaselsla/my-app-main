import "./App.css";
import React, { useState } from "react";
import axios from "axios";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(email, password);

  const handleApi = () => {
    axios.post("https://reqres.in/api/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response);
        alert("successfully login")
      })
      .catch((error) => {
        // Handle login error
        console.error( error);
        alert("service Error")
      });
  };

  return (
    <div >

          <label>
            Username:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />

          <button onClick={handleApi}>Login</button>

    </div>
  );
}

export default App;


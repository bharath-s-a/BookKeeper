import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login() {
  const [user, setUser] = useState("");
  const [pass, setpass] = useState("");
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
  }

  function log() {
    console.log(user, pass);
    if (user === "admin" && pass === "12345") {
      navigate("/admin");
    } else {
      axios
        .get(`https://bookkeeper-u3vw.onrender.com/log/${user}/${pass}`)
        .then((res) => {
          if (res.data === true) {
            <Link to="/" state={{ name: user }}>
              navigate("/home")
            </Link>;
            navigate("/home");
            console.log("gg");
          } else {
            console.log(res.data);
          }
        });
    }
  }

  return (
    <div className="main">
      <form onSubmit={handleSubmit}>
        <div className="login">
          <div className="outlet">
            <h1>Login</h1>
            <label htmlFor="username">Username: </label>
            <input
              type="text"
              id="username"
              name="username"
              onChange={(e) => setUser(e.target.value)}
            />
            <br />

            <label htmlFor="password">Password: </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={(e) => setpass(e.target.value)}
            />
            <br />

            <button
              id="logbutton"
              onClick={() => {
                log();
              }}
            >
              login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;

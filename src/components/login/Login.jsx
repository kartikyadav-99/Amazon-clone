import React, { useState } from "react";
import "./Login.css";
import CloseIcon from "@mui/icons-material/Close";

import { Link, useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const handleSignup = async (e) => {
    e.preventDefault()
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log("User created:", userCredential.user);
  } catch (error) {
    console.error("Error creating user:", error.message);
  }
  }


  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="login">
      <img
        className="login__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
        alt=""
      />
      <div className="login__container">
        <Link to={"/"}>
          <CloseIcon className="login__close" fontSize="inherit" />
        </Link>

        <h1>Sign-in</h1>

        <form >
          <h5>Email</h5>
          <input
            type="text"
            placeholder="Enter a email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            placeholder="Enter a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login__signInBtn" onClick={handleSignup}>
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button className="login__googleSignIn" onClick={handleGoogleSignIn}>
          Sign in with Google Account
        </button>
      </div>
    </div>
  );
};

export default Login;

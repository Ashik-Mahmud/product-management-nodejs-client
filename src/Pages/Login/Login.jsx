import axios from "axios";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import React, { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../../App";
import { auth } from "../../Firebase/Firebase.config";
import useFirebase from "../../Hooks/useFirebase";
import useTitle from "../../Hooks/useTitle";
import "./../Pages.css";
const Login = () => {
  useTitle("Login ");
  const { isAuth } = useContext(AppContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  useEffect(() => {
    if (isAuth) {
      navigate(from, { replace: true });
    }
  }, [isAuth, navigate, from]);

  const { signInWithSocial } = useFirebase();
  /* handle google sign in  */
  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithSocial(provider);
  };
  /* handle facebook sign in  */
  const handleFacebookSignIn = () => {
    const provider = new FacebookAuthProvider();
    signInWithSocial(provider);
  };

  useEffect(() => {
    if (isAuth) {
      axios
        .post("https://product-management-server.onrender.com/login", {
          uid: auth?.currentUser?.uid,
        })
        .then((res) => {
          if (!res?.data?.accessToken) {
            signOut(auth);
            navigate("/login");
            sessionStorage.removeItem("accessToken");
          } else {
            sessionStorage.setItem("accessToken", res.data.accessToken);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [isAuth, navigate]);

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <h3>Login with Social</h3>
        <button className="btn btn-primary" onClick={handleGoogleSignIn}>
          Google Sign In
        </button>
        <span>Or</span>
        <button onClick={handleFacebookSignIn} className="btn btn-primary">
          Facebook Sign In
        </button>
      </div>
    </div>
  );
};

export default Login;

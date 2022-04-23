import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../../App";
import useFirebase from "../../Hooks/useFirebase";
import "./../Pages.css";
const Login = () => {
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
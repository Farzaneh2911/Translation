import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore';
import { app } from '../firebaseInit';
import swal from 'sweetalert2';
import "../css/cardStyle.css";
import Logo from "../imgs/logo.svg";
import Login from "../imgs/login.png";
import Login2 from "../imgs/login2.png";
import google from "../imgs/google.png";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [bgLoaded, setBgLoaded] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);

  const handleEmailBlur = (event) => {
    if (
      event.target.value === "" ||
      !event.target.value.includes("@") ||
      !event.target.value.includes(".com")
    ) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordBlur = (event) => {
    if (event.target.value === "") {
      setPasswordError("Please enter your password.");
    } else if (event.target.value.length < 4) {
      setPasswordError("Password is too small.");
    } else {
      setPasswordError("");
    }
  };

  const handleSignIn = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      const userDocRef = doc(db, "users", user.uid);
      const userDoc = await getDoc(userDocRef);

      if (!userDoc.exists()) {
        const name = user.displayName || user.email.split('@')[0];
        await setDoc(userDocRef, {
          email: user.email,
          name: name,
          isAdmin: false
        });
        localStorage.setItem("firstName", name);
      } else {
        const userData = userDoc.data();
        
        localStorage.setItem("firstName", userData.name);
      }

      navigate('/profile');
    } catch (error) {
      swal({
        title: "Error!",
        text: error.message,
        icon: "error",
        buttons: "Ok",
      });
    }
  };

  const handleGoogleAuth = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const userDocRef = doc(db, "users", user.uid);
      const userDoc = await getDoc(userDocRef);

      if (!userDoc.exists()) {
        await setDoc(userDocRef, {
          email: user.email,
          name: user.displayName,
          isAdmin: false
        });
      }

      navigate('/');
    } catch (error) {
      swal({
        title: "Error!",
        text: error.message,
        icon: "error",
        buttons: "Ok",
      });
    }
  };

  const handleBgLoad = () => setBgLoaded(true);

  return (
    <div className="signin-page">
      <div className="login-navbar">
        <div className="main-logo">
          <img src={Logo} className="ecommerce-logo" alt="E-commerce Logo"/>
        </div>
        <div className="signup">
          <Link to="/register">
            <button className="signup-btn">Sign up</button>
          </Link>
        </div>
      </div>
      <div className="background">
        <img src={Login} className="BG1" onLoad={handleBgLoad} alt=""/>
        <img src={Login2} className="BG2" onLoad={handleBgLoad} alt=""/>
      </div>
      {bgLoaded && (
        <div className="main-form">
          <div className="login-form">
            <div className="some-text">
              <p className="user">User Login form</p>
              <p className="user-desc">Please insert your details to get signed in to your account</p>
            </div>
            <div className="user-details">
              <input
                type="email"
                placeholder="Enter Email"
                className="email"
                value={email}
                onChange={handleEmailChange}
                onBlur={handleEmailBlur}
                required
              />
              {emailError && <div className="error-message">{emailError}</div>}
              <input
                type="password"
                placeholder="Password"
                className="password"
                value={password}
                onChange={handlePasswordChange}
                onBlur={handlePasswordBlur}
                required
              />
              {passwordError && <div className="error-message">{passwordError}</div>}
              <button onClick={handleSignIn} className="signin-btn">Sign in</button>
              <div className="extra-buttons">
                <p className="or">&#x2015; Or &#x2015;</p>
                <button onClick={handleGoogleAuth} className="google">
                  <p>Sign in with</p>
                  <img src={google} className="google-img" alt="Google"/>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignIn;

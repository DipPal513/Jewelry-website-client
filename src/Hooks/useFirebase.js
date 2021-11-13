import React, { useEffect, useState } from "react";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
  updateProfile,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import initializeAuthontication from "../Firebase/Firebase.init";
const useFirebase = () => {
  initializeAuthontication();
  const auth = getAuth();
  const [user, setUser] = useState(null);
  const [error, setError] = useState();
  const [admin, setAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  // register

  const registerUser = (email, password, name, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setError("");
        const newUser = { email, displayName: name };
        setUser(newUser);
        // save user to the database
        // saveUser(email, name, "POST");
        // send name to firebase after creation
        setError('')
        saveUser(email, name, "POST");
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {});
        history.replace("/");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  const logOut = () => {
    signOut(auth)
      .then((res) => setUser({}))
      .catch((err) => setError(err));
  };
  // login with email and password
  const loginUser = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || "/";
        saveUser(user.email, user.displayName, "PUT");

        history.replace(destination);
        setUser(userCredential.user);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
  }, [auth]);
  const saveUser = (email, displayName, method) => {
    const user = { email, displayName };
    fetch("https://murmuring-cove-28727.herokuapp.com/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };
  useEffect(() => {
    fetch(`https://murmuring-cove-28727.herokuapp.com/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [user?.email]);
  
  return {
    user,
    loginUser,
    registerUser,
    loginUser,
    logOut,
    isLoading,
    setIsLoading,
    admin,
    error,
  };
};

export default useFirebase;

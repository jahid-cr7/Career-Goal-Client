import React, { useEffect, useState } from "react";
import { AuthContext } from "./ContextAuth";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../Firebase/Firebase.Config";
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [users, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const signout = () => {
    setLoading(true);
    return signOut(auth);
  };
  const verifyEmail = () => {
    setLoading(true);
    return sendEmailVerification(auth.currentUser);
  };
  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      setUser(currentuser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const user = {
    createUser,
    signIn,
    signInWithGoogle,
    signout,
    verifyEmail,
    users,
    loading,
    resetPassword,
  };
  return <AuthContext value={user}>{children}</AuthContext>;
};

export default AuthProvider;

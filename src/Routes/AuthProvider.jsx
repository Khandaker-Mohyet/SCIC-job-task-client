import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.init";
const provider = new GoogleAuthProvider();


export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)

  const googleSignIn = () => {
    return signInWithPopup(auth, provider)
  }

  const singInOut = () => {
    setUser(null)
    return signOut(auth)
  };

  const info = {
    user,
    loading,
    googleSignIn,
    singInOut
  }
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
    })
    return () => {
      unsubscribe()
    }
  },[])

  return (
    <AuthContext.Provider value = {info}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

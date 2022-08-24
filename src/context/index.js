import { createContext, useContext, useState } from "react";
import { registerGoogle, signInGoogle, signOutGoogle } from "./googleAuth";


const AuthContext = createContext(undefined);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  console.log(user)
  const Register = (newUser, callback) => {
    return registerGoogle(() => {
      setUser(newUser);
      callback()
    }, newUser)
  }

  const signIn = (newUser, callback) => {
    return signInGoogle(() => {
      setUser(newUser);
      //callback:() => {navigate(from, {replace: true});}
      callback();
    }, newUser);
  };

  const signOut = (callback) => {
    return signOutGoogle(() => {
      setUser(null);
      callback();
    });
  };
  const value = { user, signOut, signIn, Register };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

function useAuth() {
  return useContext(AuthContext);
}

export { useAuth, AuthProvider };

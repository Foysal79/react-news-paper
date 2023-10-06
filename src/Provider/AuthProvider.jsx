import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithCredential, signInWithEmailAndPassword, signOut } from "firebase/auth";



export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);

   
     const createUser = (email, password) => {
        setLoading(true)
      return  createUserWithEmailAndPassword(auth, email, password)
     }

     const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
     }

     const logout = () => {
        setLoading(true)
        return signOut(auth);
     }


     useEffect( () => {
      const unsubscribed =  onAuthStateChanged(auth, currentUser => {
        
        console.log("observe your email ", currentUser);
        setUser(currentUser);
        setLoading(false)
      } )
      return () => {
        unsubscribed();
      }
     }, [])


    const authInfo = {
        user,
        createUser,
        logout,
        signIn,
        loading

    }



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut,  } from "firebase/auth";
import app from "../Firebase/firebase.config";


export const AuthContext = createContext(null);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setloading] = useState(true);


     const createUser = (email,password) => {
        setloading(true)
        return createUserWithEmailAndPassword(auth, email, password)
        
     }

     const login= (email, password) => {
        setloading(true)
        return signInWithEmailAndPassword(auth, email, password)
     }

     const logOut = () => {
        setloading(true)
        return signOut(auth)
     }

     const loginWithGoogle =()=>{
        setloading(true)
         return signInWithPopup(auth,provider)
        
     }

     useEffect( () => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user in the current state changed' , currentUser);
            setUser(currentUser);
            setloading(false);
        });
        return () => {
            unSubscribe()
        }
     })
    
   const authInfo = {
    user,
    loading,
    createUser,
    login,
    loginWithGoogle,
    logOut,
    
   }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
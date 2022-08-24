import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../fireBase-config";

const registerGoogle = async (callback, userDetail) => {
    try {
        const user = await createUserWithEmailAndPassword(
            auth,
            userDetail.registerEmail,
            userDetail.registerPassword
        )
        callback()
        console.log(user)
    } catch (error) {
        console.log(error)
    }
}

const signInGoogle = async (callback, userDetail) => {
    try {
        const logUser = await signInWithEmailAndPassword(
            auth,
            userDetail.loginEmail,
            userDetail.loginPassword
        )
        //callback:() => {setUser(newUser);callback()}
        callback()
        console.log(logUser)
    } catch (error) {
        console.log(error)
    }
}

const signOutGoogle = async (callback) => {
    try {
        const signOutUser = await signOut(auth)
        console.log(signOutUser)
        callback()
    } catch (error) {
        console.log(error)
    }

}


export { signInGoogle, registerGoogle, signOutGoogle }
import { auth } from "./config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail, updatePassword } from "firebase/auth";

export const doCreateUserWithEmailAndPassword = async (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
}

export const doSignInWithEmailAndPassword = async (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const doCreateUserWithGoogle = async (email: string, password: string) => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    return result;
}

export const doSignOut = () => {
    return auth.signOut();
}

export const doSendPasswordResetEmail = (email: string) => {
    return sendPasswordResetEmail(auth, email);
}

export const doUpdatePassword = (email: string) => {
    if (auth.currentUser) {
        return updatePassword(auth.currentUser, email);
    }
}
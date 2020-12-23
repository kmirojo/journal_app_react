import { types } from "../types/types";
import { googleAuthProvider } from "../firebase/firebase-config";
import firebase from "firebase/app";
import { startLoading, finishLoading } from "./ui";
import Swal from "sweetalert2";
import { notesLogout } from "./notes";

// ↓↓ Actions ↓↓
export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName,
    },
});

export const logout = () => ({
    type: types.logout,
});

// ↑↑ ↑↑

// ↓↓ Middlewares - Expected to work with Thunk
export const startLoginEmailPassword = (email, password) => {
    return async (dispatch) => {
        try {
            dispatch(startLoading());

            const { user } = await firebase
                .auth()
                .signInWithEmailAndPassword(email, password);

            const { uid, displayName } = user;

            dispatch(login(uid, displayName));
            dispatch(finishLoading());
        } catch (err) {
            console.error(err);
            dispatch(finishLoading());
            Swal.fire(Error, err.message, "error");
        }
    };
};

export const startRegisterWithEmailPasswordName = (email, password, name) => {
    return async (dispatch) => {
        try {
            const {
                user,
            } = await firebase
                .auth()
                .createUserWithEmailAndPassword(email, password);

            await user.updateProfile({ displayName: name }); // Updates user profile in DB

            const { uid, displayName } = user;
            dispatch(login(uid, displayName));
        } catch (err) {
            console.error("Registration Error: ", err);
            Swal.fire("Error", err.message, "error");
        }
    };
};

export const startGoogleLogin = () => {
    return async (dispatch) => {
        try {
            const { user } = await firebase
                .auth()
                .signInWithPopup(googleAuthProvider);

            const { displayName, uid } = user;

            dispatch(login(uid, displayName));
        } catch (error) {
            console.error("Authentication Error: ", error);
        }
    };
};

export const startLogout = () => {
    return async (dispatch) => {
        try {
            await firebase.auth().signOut();

            dispatch(logout());
            dispatch(notesLogout());
        } catch (err) {
            console.error("Logout Error: ", err);
        }
    };
};
// ↑↑ ↑↑

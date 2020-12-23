import React, { useEffect, useState } from "react";
import AuthRouter from "./AuthRouter";
import JournalScreen from "../components/journal/JournalScreen";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import firebase from "firebase/app";
import { useDispatch } from "react-redux";
import { login } from "../actions/auth";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { startLoadingNotes } from "../actions/notes";

const AppRouter = () => {
    const dispatch = useDispatch();

    const [checking, setChecking] = useState(true);
    const [isLoggedIn, setisLoggedIn] = useState(false);

    // Initial auth if user has already logged in
    useEffect(() => {
        // ↓ Firebase Observable
        firebase.auth().onAuthStateChanged(async (user) => {
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));
                setisLoggedIn(true);

                dispatch(startLoadingNotes(user.uid));
            } else {
                setisLoggedIn(false);
            }

            setChecking(false);
        });
    }, [dispatch, setChecking, setisLoggedIn]);

    if (checking) {
        return <h1> Wait... </h1>;
    }

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute
                        isAuthenticated={isLoggedIn}
                        path="/auth"
                        component={AuthRouter}
                    />

                    <PrivateRoute
                        exact
                        isAuthenticated={isLoggedIn}
                        path="/"
                        component={JournalScreen}
                    />

                    <Redirect to="/auth/login" />
                </Switch>
            </div>
        </Router>
    );
};

export default AppRouter;

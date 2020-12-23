import React from "react";
import { Link } from "react-router-dom";
import validator from "validator";
import { useForm } from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { setError, removeError } from "../../actions/ui";
import { startRegisterWithEmailPasswordName } from "../../actions/auth";
import Swal from "sweetalert2";

const RegisterScreen = () => {
    const dispatch = useDispatch();
    const { msgError } = useSelector((state) => state.ui);

    const [formValues, handleInputChange] = useForm({
        name: "Juan",
        email: "juancho@gmail.com",
        password: "123456",
        password2: "123456",
    });

    const { name, email, password, password2 } = formValues;

    const handleRegister = (ev) => {
        ev.preventDefault();

        console.log(isFormValid());
        if (isFormValid()) {
            dispatch(startRegisterWithEmailPasswordName(email, password, name));
        }
    };

    const isFormValid = () => {
        if (name.trim().length === 0) {
            const message = "Name is required";

            dispatch(setError(message));
            Swal.fire("Warning", message, "warning");

            return false;
        } else if (!validator.isEmail(email)) {
            const message = "Email is not valid";

            dispatch(setError(message));
            Swal.fire("Warning", message, "warning");

            return false;
        } else if (password !== password2 || password.length < 6) {
            const message =
                "Password should be at least 6 characters and match each other";

            dispatch(setError(message));
            Swal.fire("Warning", message, "warning");

            return false;
        }

        dispatch(removeError());
        Swal.fire("Done!", "User was registered!", "success");
        return true;
    };

    const errorAlert = () => {
        if (msgError !== null) {
            return <div className="auth__alert-error">{msgError}</div>;
        }
    };

    return (
        <>
            <h3 className="auth__title">Register</h3>

            <form onSubmit={handleRegister}>
                <input
                    className="auth__input"
                    type="text"
                    placeholder="Name"
                    name="name"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />

                <input
                    className="auth__input"
                    type="email"
                    placeholder="Email"
                    name="email"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />

                <input
                    className="auth__input"
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={handleInputChange}
                />

                <input
                    className="auth__input"
                    type="password"
                    placeholder="Confirm Password"
                    name="password2"
                    value={password2}
                    onChange={handleInputChange}
                />

                <button className="btn btn-primary btn-block" type="submit">
                    Register
                </button>

                <Link to="/auth/login" className="link mt-5">
                    Already registered?
                </Link>
            </form>
        </>
    );
};

export default RegisterScreen;

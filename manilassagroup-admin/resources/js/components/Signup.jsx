import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import DispatchContext from "../DispatchContext";

function Signup() {
    const appDispatch = useContext(DispatchContext);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    async function handleSubmit(e) {
        e.preventDefault();
        if (password !== passwordConfirmation) {
            setError("Passwords do not match");
            appDispatch({
                type: "flashMessage",
                value: "Password did not match",
            });
            return;
        }

        try {
            await Axios.post("/api/register", {
                name,
                email,
                password,
                password_confirmation: passwordConfirmation,
            });
            setSuccess("User was successfully created.");
            setError(null);
            console.log("user was succesfully created.");
            appDispatch({
                type: "flashMessage",
                value: "user was succesfully created",
            });
        } catch (e) {
            if (e.response) {
                setError(e.response.data.message || "There was an error.");
            } else {
                setError("There was an error.");
                appDispatch({
                    type: "flashMessage",
                    value: "There was an error",
                });
            }
            setSuccess(null);
        }
    }

    return (
        <div className="wrapper">
            <div className="d-flex align-items-center justify-content-center my-5">
                <div className="container-fluid">
                    <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-3">
                        <div className="col mx-auto">
                            <div className="card mb-0">
                                <div className="card-body">
                                    <div className="p-4">
                                        <div className="mb-3 text-center">
                                            <img
                                                src="assets/images/logo-icon.png"
                                                width={60}
                                                alt=""
                                            />
                                        </div>
                                        <div className="text-center mb-4">
                                            <h5 className="">SSA Admin</h5>
                                            <p className="mb-0">
                                                Please fill the below details to
                                                create your account
                                            </p>
                                        </div>
                                        <div className="form-body">
                                            <form
                                                onSubmit={handleSubmit}
                                                className="row g-3"
                                            >
                                                {/* {error && (
                                                    <div className="alert alert-danger">
                                                        {error}
                                                    </div>
                                                )}
                                                {success && (
                                                    <div className="alert alert-success">
                                                        {success}
                                                    </div>
                                                )} */}
                                                <div className="col-12">
                                                    <label
                                                        htmlFor="inputUsername"
                                                        className="form-label"
                                                    >
                                                        Name
                                                    </label>
                                                    <input
                                                        onChange={(e) =>
                                                            setName(
                                                                e.target.value
                                                            )
                                                        }
                                                        type="text"
                                                        className="form-control"
                                                        id="inputUsername"
                                                        value={name}
                                                        placeholder="Jhon"
                                                    />
                                                </div>
                                                <div className="col-12">
                                                    <label
                                                        htmlFor="inputEmailAddress"
                                                        className="form-label"
                                                    >
                                                        Email Address
                                                    </label>
                                                    <input
                                                        onChange={(e) =>
                                                            setEmail(
                                                                e.target.value
                                                            )
                                                        }
                                                        type="email"
                                                        className="form-control"
                                                        id="inputEmailAddress"
                                                        value={email}
                                                        placeholder="example@user.com"
                                                    />
                                                </div>
                                                <div className="col-12">
                                                    <label
                                                        htmlFor="inputChoosePassword"
                                                        className="form-label"
                                                    >
                                                        Password
                                                    </label>
                                                    <div
                                                        className="input-group"
                                                        id="show_hide_password"
                                                    >
                                                        <input
                                                            onChange={(e) =>
                                                                setPassword(
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                            type="password"
                                                            className="form-control border-end-0"
                                                            id="inputChoosePassword"
                                                            value={password}
                                                            defaultValue={
                                                                12345678
                                                            }
                                                            placeholder="Enter Password"
                                                        />{" "}
                                                        <a
                                                            href="javascript:;"
                                                            className="input-group-text bg-transparent"
                                                        >
                                                            <i className="bx bx-hide" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <label
                                                        htmlFor="inputChoosePassword"
                                                        className="form-label"
                                                    >
                                                        Confirm Password
                                                    </label>
                                                    <div
                                                        className="input-group"
                                                        id="show_hide_password"
                                                    >
                                                        <input
                                                            onChange={(e) =>
                                                                setPasswordConfirmation(
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                            type="password"
                                                            className="form-control border-end-0"
                                                            id="inputPasswordConfirmation"
                                                            value={
                                                                passwordConfirmation
                                                            }
                                                            defaultValue={
                                                                12345678
                                                            }
                                                            placeholder="Confirm Password"
                                                        />{" "}
                                                        <a
                                                            href="javascript:;"
                                                            className="input-group-text bg-transparent"
                                                        >
                                                            <i className="bx bx-hide" />
                                                        </a>
                                                    </div>
                                                </div>
                                                {/* <div className="col-12">
                                                    <label
                                                        htmlFor="inputSelectCountry"
                                                        className="form-label"
                                                    >
                                                        Country
                                                    </label>
                                                    <select
                                                        className="form-select"
                                                        id="inputSelectCountry"
                                                        aria-label="Default select example"
                                                    >
                                                        <option selected="">
                                                            India
                                                        </option>
                                                        <option value={1}>
                                                            United Kingdom
                                                        </option>
                                                        <option value={2}>
                                                            America
                                                        </option>
                                                        <option value={3}>
                                                            Dubai
                                                        </option>
                                                    </select>
                                                </div> */}
                                                <div className="col-12">
                                                    <div className="form-check form-switch">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            id="flexSwitchCheckChecked"
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                            htmlFor="flexSwitchCheckChecked"
                                                        >
                                                            I read and agree to
                                                            Terms &amp;
                                                            Conditions
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="d-grid">
                                                        <button
                                                            type="submit"
                                                            className="btn btn-primary"
                                                        >
                                                            Sign up
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="text-center ">
                                                        <p className="mb-0">
                                                            Already have an
                                                            account?{" "}
                                                            <Link to="/login">
                                                                Sign in here
                                                            </Link>
                                                        </p>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="login-separater text-center mb-5">
                                            {" "}
                                            <span>OR SIGN UP WITH EMAIL</span>
                                            <hr />
                                        </div>
                                        <div className="list-inline contacts-social text-center">
                                            <a
                                                href="javascript:;"
                                                className="list-inline-item bg-facebook text-white border-0 rounded-3"
                                            >
                                                <i className="bx bxl-facebook" />
                                            </a>
                                            <a
                                                href="javascript:;"
                                                className="list-inline-item bg-twitter text-white border-0 rounded-3"
                                            >
                                                <i className="bx bxl-twitter" />
                                            </a>
                                            <a
                                                href="javascript:;"
                                                className="list-inline-item bg-google text-white border-0 rounded-3"
                                            >
                                                <i className="bx bxl-google" />
                                            </a>
                                            <a
                                                href="javascript:;"
                                                className="list-inline-item bg-linkedin text-white border-0 rounded-3"
                                            >
                                                <i className="bx bxl-linkedin" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*end row*/}
                </div>
            </div>
        </div>
    );
}

export default Signup;

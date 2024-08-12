import React, { useState, useContext } from "react";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";
//import ExampleContext from "../ExampleContext";

import DispatchContext from "../DispatchContext";

// function Login({ setIsAuthenticated }) {
function Login() {
    const appDispatch = useContext(DispatchContext);
    //const { setIsAuthenticated, addFlashMessage } = useContext(ExampleContext);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = await Axios.post("/api/login", {
                email,
                password,
            });

            if (response.data.status) {
                // console.log(response.data);
                // localStorage.setItem("manilaToken", response.data.token);
                // localStorage.setItem("manilaName", response.data.user.name);
                // localStorage.setItem("manilaPhoto", response.data.user.photo);
                // localStorage.setItem("manilaRole", response.data.user.role);
                appDispatch({ type: "login", data: response.data });
                navigate("/");
            } else {
                //console.log("email or password is invalid");
                appDispatch({
                    type: "flashMessage",
                    value: "Email or password is Invalid",
                });
            }
        } catch (e) {
            console.log("There was a problem");
        }
    }

    return (
        <div className="wrapper">
            <div className="section-authentication-cover">
                <div className="">
                    <div className="row g-0">
                        <div className="col-12 col-xl-7 col-xxl-8 auth-cover-left align-items-center justify-content-center d-none d-xl-flex">
                            <div className="card shadowNone bg-transparent shadow-none rounded-0 mb-0">
                                <div className="card-body">
                                    <img
                                        src="/backend/assets/images/login-images/login-cover.svg"
                                        className="img-fluid auth-img-cover-login"
                                        width={650}
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-xl-5 col-xxl-4 auth-cover-right align-items-center justify-content-center">
                            <div className="card rounded-0 m-3 shadow-none bg-transparent mb-0">
                                <div className="card-body p-sm-5">
                                    <div className="">
                                        <div className="mb-3 text-center">
                                            <img
                                                src="assets/images/logo-icon.png"
                                                width={60}
                                                alt=""
                                            />
                                        </div>
                                        <div className="text-center mb-4">
                                            <h5 className="">
                                                SSA Group Admin
                                            </h5>
                                            <p className="mb-0">
                                                Please log in to your account
                                            </p>
                                        </div>
                                        <div className="form-body">
                                            <form
                                                className="row g-3"
                                                onSubmit={handleSubmit}
                                            >
                                                <div className="col-12">
                                                    <label
                                                        htmlFor="inputEmailAddress"
                                                        className="form-label"
                                                    >
                                                        Email
                                                    </label>
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        onChange={(e) =>
                                                            setEmail(
                                                                e.target.value
                                                            )
                                                        }
                                                        id="inputEmailAddress"
                                                        placeholder="jhon@example.com"
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
                                                            type="password"
                                                            className="form-control border-end-0"
                                                            id="inputChoosePassword"
                                                            defaultValue={
                                                                12345678
                                                            }
                                                            onChange={(e) =>
                                                                setPassword(
                                                                    e.target
                                                                        .value
                                                                )
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
                                                <div className="col-md-6">
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
                                                            Remember Me
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 text-end">
                                                    {" "}
                                                    <a href="authentication-forgot-password.html">
                                                        Forgot Password ?
                                                    </a>
                                                </div>
                                                <div className="col-12">
                                                    <div className="d-grid">
                                                        <button
                                                            type="submit"
                                                            className="btn btn-primary"
                                                        >
                                                            Sign in
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="text-center ">
                                                        <p className="mb-0">
                                                            Don't have an
                                                            account yet?{" "}
                                                            <Link to="/signup">
                                                                Sign up here
                                                            </Link>
                                                        </p>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="login-separater text-center mb-5">
                                            {" "}
                                            <span>OR SIGN IN WITH</span>
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

export default Login;

import React, { useState, useReducer, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useImmerReducer } from "use-immer";
import Axios from "axios";
Axios.defaults.baseURL = "http://localhost:8000";

import StateContext from "./StateContext";
import DispatchContext from "./DispatchContext";
import Login from "./components/Login";
import Signup from "./components/Signup";
import UserProfile from "./components/UserProfile";
import Content from "./components/Content";
import Courses from "./pages/Courses";
import Organisation from "./components/organisation/AllOrganisation";
import CreateOrganisation from "./components/organisation/CreateOrganisation";
import ViewSingleOrganisation from "./components/organisation/ViewSingleOrganisation";
import EditOrganisation from "./components/organisation/EditOrganisation";
import EBooks from "./components/EBooks";
import Header from "./components/Header";
import SideBar from "./components/Sidebar";
import Footer from "./components/Footer";
import Page from "./components/Page";
import FlashMessages from "./components/FlashMessages";
import NotFound from "./components/NotFound";
//import ExampleContext from "./ExampleContext";

function App() {
    const initialState = {
        isAuthenticated: Boolean(localStorage.getItem("manilaToken")),
        flashMessages: [],
        user: {
            token: localStorage.getItem("manilaToken"),
            name: localStorage.getItem("manilaName"),
            avatar: localStorage.getItem("manilaPhoto"),
            role: localStorage.getItem("manilaRole"),
            userId: localStorage.getItem("manilaUserId"),
            email: localStorage.getItem("manilaEmail"),
        },
    };

    function ourReducer(draft, action) {
        switch (action.type) {
            case "login":
                draft.isAuthenticated = true;
                draft.user = {
                    token: action.data.token,
                    name: action.data.user.name,
                    avatar: action.data.user.photo,
                    role: action.data.user.role,
                    userId: action.data.user.id,
                    email: action.data.user.email,
                };
                return;
            case "logout":
                draft.isAuthenticated = false;
                return;
            case "flashMessage":
                draft.flashMessages.push(action.value);
                return;
        }
    }

    const [state, dispatch] = useImmerReducer(ourReducer, initialState);

    useEffect(() => {
        if (state.isAuthenticated) {
            localStorage.setItem("manilaToken", state.user.token);
            localStorage.setItem("manilaName", state.user.name);
            localStorage.setItem("manilaPhoto", state.user.photo);
            localStorage.setItem("manilaRole", state.user.role);
            localStorage.setItem("manilaUserId", state.user.userId);
            localStorage.setItem("manilaEmail", state.user.email);
        } else {
            localStorage.removeItem("manilaToken");
            localStorage.removeItem("manilaName");
            localStorage.removeItem("manilaPhoto");
            localStorage.removeItem("manilaRole");
            localStorage.removeItem("manilaUserId");
            localStorage.removeItem("manilaEmail");
        }
    }, [state.isAuthenticated]);

    // const [isAuthenticated, setIsAuthenticated] = useState(
    //     Boolean(localStorage.getItem("manilaToken"))
    // );

    // const [flashMessages, setFlashMessages] = useState([]);

    // function addFlashMessage(msg) {
    //     setFlashMessages((prev) => [...prev, msg]);
    // }

    return (
        <StateContext.Provider value={state}>
            <DispatchContext.Provider value={dispatch}>
                <BrowserRouter>
                    <FlashMessages messages={state.flashMessages} />
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route
                            path="/signup"
                            element={<Signup />} // Add the Signup route
                        />
                        <Route
                            path="/*"
                            element={
                                state.isAuthenticated ? (
                                    <>
                                        <SideBar />
                                        <Header />
                                        <Routes>
                                            <Route
                                                path="/"
                                                element={<Content />}
                                            />
                                            <Route
                                                path="/organisation"
                                                element={<Organisation />}
                                            />
                                            <Route
                                                path="/create-organisation"
                                                element={<CreateOrganisation />}
                                            />
                                            <Route
                                                path="/organisation/:id"
                                                element={
                                                    <ViewSingleOrganisation />
                                                }
                                            />
                                            <Route
                                                path="/organisation/:id/edit"
                                                element={<EditOrganisation />}
                                            />
                                            <Route
                                                path="e-books"
                                                element={<EBooks />}
                                            />
                                            <Route
                                                path="/profile/:username/*"
                                                element={<UserProfile />}
                                            />
                                            <Route
                                                path="*"
                                                element={<NotFound />}
                                            />
                                        </Routes>
                                        <Footer />
                                    </>
                                ) : (
                                    <Navigate to="/login" />
                                )
                            }
                        />
                    </Routes>
                </BrowserRouter>
            </DispatchContext.Provider>
        </StateContext.Provider>
    );
}

export default App;

// import React from "react";
// import ReactDOM from "react-dom";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from "./components/Login";
// import Content from "./components/Content";
// import Courses from "./pages/Courses";
// import EBooks from "./components/EBooks";
// import Header from "./components/Header";
// import SideBar from "./components/Sidebar";
// import Footer from "./components/Footer";

// function App() {
//     return (
//         <BrowserRouter>
//             <Header />
//             <SideBar />
//             <Routes>
//                 <Route path="" element={<Content />} />
//                 <Route path="courses" element={<Courses />} />
//                 <Route path="e-books" element={<EBooks />} />
//             </Routes>
//             <Footer />
//         </BrowserRouter>
//     );
// }

// export default App;

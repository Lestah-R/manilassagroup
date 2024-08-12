import React, { useEffect, useState, useContext } from "react";
import Page from "../Page";
import { useParams } from "react-router-dom";
import Axios from "axios";
import StateContext from "../../StateContext";
import LoadingDotsIcon from "../LoadingDotsIcon";

function ViewSingleOrganisation() {
    const appState = useContext(StateContext);
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [organisation, setOrganisation] = useState();

    useEffect(() => {
        const ourRequest = Axios.CancelToken.source();

        const fetchOrganisation = async () => {
            try {
                const response = await Axios.get(`/api/organisations/${id}`, {
                    headers: {
                        Authorization: `Bearer ${appState.user.token}`,
                    },
                    cancelToken: ourRequest.token,
                });
                if (response.data.status) {
                    setOrganisation(response.data.organisation);
                    console.log(response.data);
                    setIsLoading(false);
                }
            } catch (error) {
                if (Axios.isCancel(error)) {
                    console.log("Request canceled", error.message);
                } else {
                    console.error(
                        "There was an error fetching the single organisation",
                        error
                    );
                }
            }
        };

        fetchOrganisation();

        return () => {
            ourRequest.cancel("Operation canceled by the user.");
        };
    }, []);

    if (isLoading)
        return (
            <Page title="Loading">
                <div className="page-wrapper">
                    <div className="page-content">
                        <LoadingDotsIcon />
                    </div>
                </div>
            </Page>
        );

    return (
        <>
            <Page title="Single Organisation">
                <div className="page-wrapper">
                    <div className="page-content">
                        {/*breadcrumb*/}
                        <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
                            <div className="breadcrumb-title pe-3">
                                User Profile
                            </div>
                            <div className="ps-3">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb mb-0 p-0">
                                        <li className="breadcrumb-item">
                                            <a href="javascript:;">
                                                <i className="bx bx-home-alt" />
                                            </a>
                                        </li>
                                        <li
                                            className="breadcrumb-item active"
                                            aria-current="page"
                                        >
                                            User Profilep
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                        {/*end breadcrumb*/}
                        <div className="container">
                            <div className="main-body">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="d-flex flex-column align-items-center text-center">
                                                    <img
                                                        src={`/storage/${organisation.photo}`}
                                                        alt="Admin"
                                                        className="p-1 bg-primary"
                                                        width={310}
                                                        height={310}
                                                    />
                                                    <div className="mt-3">
                                                        <h4>
                                                            {organisation.name}
                                                        </h4>
                                                        {/* <p className="text-secondary mb-1">
                                                            Full Stack Developer
                                                        </p> */}
                                                        <p className="text-muted font-size-sm">
                                                            {
                                                                organisation.description
                                                            }
                                                        </p>
                                                    </div>
                                                </div>
                                                <hr className="my-4" />
                                                <ul className="list-group list-group-flush">
                                                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                                        <h6 className="mb-0">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={24}
                                                                height={24}
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                strokeWidth={2}
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                className="feather feather-globe me-2 icon-inline"
                                                            >
                                                                <circle
                                                                    cx={12}
                                                                    cy={12}
                                                                    r={10}
                                                                />
                                                                <line
                                                                    x1={2}
                                                                    y1={12}
                                                                    x2={22}
                                                                    y2={12}
                                                                />
                                                                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                                                            </svg>
                                                            Website
                                                        </h6>
                                                        <span className="text-secondary">
                                                            https://codervent.com
                                                        </span>
                                                    </li>
                                                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                                        <h6 className="mb-0">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={24}
                                                                height={24}
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                strokeWidth={2}
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                className="feather feather-github me-2 icon-inline"
                                                            >
                                                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                                                            </svg>
                                                            Github
                                                        </h6>
                                                        <span className="text-secondary">
                                                            codervent
                                                        </span>
                                                    </li>
                                                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                                        <h6 className="mb-0">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={24}
                                                                height={24}
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                strokeWidth={2}
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                className="feather feather-twitter me-2 icon-inline text-info"
                                                            >
                                                                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                                                            </svg>
                                                            Twitter
                                                        </h6>
                                                        <span className="text-secondary">
                                                            @codervent
                                                        </span>
                                                    </li>
                                                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                                        <h6 className="mb-0">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={24}
                                                                height={24}
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                strokeWidth={2}
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                className="feather feather-instagram me-2 icon-inline text-danger"
                                                            >
                                                                <rect
                                                                    x={2}
                                                                    y={2}
                                                                    width={20}
                                                                    height={20}
                                                                    rx={5}
                                                                    ry={5}
                                                                />
                                                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                                                <line
                                                                    x1="17.5"
                                                                    y1="6.5"
                                                                    x2="17.51"
                                                                    y2="6.5"
                                                                />
                                                            </svg>
                                                            Instagram
                                                        </h6>
                                                        <span className="text-secondary">
                                                            codervent
                                                        </span>
                                                    </li>
                                                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                                        <h6 className="mb-0">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={24}
                                                                height={24}
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                strokeWidth={2}
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                className="feather feather-facebook me-2 icon-inline text-primary"
                                                            >
                                                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                                            </svg>
                                                            Facebook
                                                        </h6>
                                                        <span className="text-secondary">
                                                            codervent
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Page>
        </>
    );
}

export default ViewSingleOrganisation;

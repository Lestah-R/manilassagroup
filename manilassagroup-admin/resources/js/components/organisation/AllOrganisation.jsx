import React, { useEffect, useState, useContext } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import Page from "../Page";
import StateContext from "../../StateContext";
import LoadingDotsIcon from "../LoadingDotsIcon";

function AllOrganisation() {
    const [isLoading, setIsLoading] = useState(true);
    const [organisations, setOrganisations] = useState([]);
    const navigate = useNavigate();
    const appState = useContext(StateContext);

    useEffect(() => {
        const ourRequest = Axios.CancelToken.source();

        async function fetchOrganisations() {
            try {
                const response = await Axios.get("/api/organisations", {
                    headers: {
                        Authorization: `Bearer ${appState.user.token}`,
                    },
                    cancelToken: ourRequest.token,
                });
                setOrganisations(response.data);
                setIsLoading(false);
            } catch (e) {
                if (Axios.isCancel(e)) {
                    console.log("Request canceled", error.message);
                } else {
                    console.log(
                        "There was a problem fetching the organisations."
                    );
                }
            }
        }
        fetchOrganisations();
        return () => {
            ourRequest.cancel("Operation canceled by the user.");
        };
    }, [appState.user.token]);

    const handleAddOrganisation = () => {
        navigate("/create-organisation");
    };

    return (
        <>
            <Page title="All Organisation">
                <div className="page-wrapper">
                    <div className="page-content">
                        {/*breadcrumb*/}
                        <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
                            <div className="breadcrumb-title pe-3">Tables</div>
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
                                            Basic Table
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                            <div className="ms-auto">
                                <div className="btn-group">
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                        onClick={handleAddOrganisation}
                                    >
                                        Add Organisation
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/*end breadcrumb*/}
                        <div className="row">
                            <div className="col-xl-9 mx-auto">
                                <h6 className="mb-0 text-uppercase">
                                    Basic Table
                                </h6>
                                <hr />
                                <div className="card">
                                    <div className="card-body">
                                        <table className="table mb-0">
                                            <thead>
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Image</th>
                                                    <th scope="col">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {isLoading ? (
                                                    <tr>
                                                        <td colSpan="4">
                                                            <LoadingDotsIcon />
                                                        </td>
                                                    </tr>
                                                ) : (
                                                    organisations.map(
                                                        (
                                                            organisation,
                                                            index
                                                        ) => (
                                                            <tr
                                                                key={
                                                                    organisation.id
                                                                }
                                                            >
                                                                <th scope="row">
                                                                    {index + 1}
                                                                </th>
                                                                <td>
                                                                    {
                                                                        organisation.name
                                                                    }
                                                                </td>
                                                                <td>
                                                                    <img
                                                                        src={`/storage/${organisation.photo}`}
                                                                        alt={
                                                                            organisation.name
                                                                        }
                                                                        style={{
                                                                            width: "30px",
                                                                            height: "30px",
                                                                            objectFit:
                                                                                "cover",
                                                                        }}
                                                                    />
                                                                </td>
                                                                <td>
                                                                    <button
                                                                        className="btn btn-primary btn-sm"
                                                                        style={{
                                                                            marginRight:
                                                                                "5px",
                                                                        }}
                                                                    >
                                                                        Edit
                                                                    </button>
                                                                    <button className="btn btn-danger btn-sm">
                                                                        Delete
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                        )
                                                    )
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*end row*/}
                    </div>
                </div>
            </Page>
        </>
    );
}

export default AllOrganisation;

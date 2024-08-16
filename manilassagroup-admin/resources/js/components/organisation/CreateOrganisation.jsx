import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Page from "../Page";
import Axios from "axios";
import ExampleContext from "../../ExampleContext";
import DispatchContext from "../../DispatchContext";
import StateContext from "../../StateContext";

function CreateOrganisation() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [photo, setPhoto] = useState(null);
    const [photoPreview, setPhotoPreview] = useState(null);
    const navigate = useNavigate();
    //const { addFlashMessage } = useContext(ExampleContext);
    const appDispatch = useContext(DispatchContext);
    const appState = useContext(StateContext);

    async function handleSubmit(e) {
        e.preventDefault();
        // alert("fuck!");
        const formData = new FormData();
        formData.append("name", name);
        formData.append("description", description);
        if (photo) {
            formData.append("photo", photo);
        }

        try {
            const response = await Axios.post("/api/organisations", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    // Authorization: `Bearer ${localStorage.getItem(
                    //     "manilaToken"
                    // )}`,
                    Authorization: `Bearer ${appState.user.token}`,
                },
            });
            appDispatch({
                type: "flashMessage",
                value: "You added new organisation.",
            });
            // navigate(`/organisation/${response.data}`);
            console.log("new post was created. ");
        } catch (e) {
            console.log("There was a problem");
        }
    }

    function handlePhotoChange(e) {
        const file = e.target.files[0];
        setPhoto(file);
        setPhotoPreview(URL.createObjectURL(file));
    }

    return (
        <>
            <Page title="Create Organisation">
                <div className="page-wrapper">
                    <div className="page-content">
                        <div className="row">
                            <div className="col-xl-12 mx-auto">
                                <div className="card">
                                    <div className="card-body p-4">
                                        <h5 className="mb-4">
                                            Add Organisation
                                        </h5>
                                        <form
                                            onSubmit={handleSubmit}
                                            className="row g-3"
                                        >
                                            <div className="col-md-12">
                                                <label
                                                    htmlFor="input1"
                                                    className="form-label"
                                                >
                                                    Name
                                                </label>
                                                <input
                                                    onChange={(e) =>
                                                        setName(e.target.value)
                                                    }
                                                    autoFocus
                                                    type="text"
                                                    className="form-control"
                                                    id="input1"
                                                    placeholder="First Name"
                                                    autoComplete="off"
                                                />
                                            </div>
                                            <div className="col-md-12">
                                                <label
                                                    htmlFor="input11"
                                                    className="form-label"
                                                >
                                                    Description
                                                </label>
                                                <textarea
                                                    onChange={(e) =>
                                                        setDescription(
                                                            e.target.value
                                                        )
                                                    }
                                                    className="form-control"
                                                    id="input11"
                                                    placeholder="Description ..."
                                                    rows={6}
                                                    defaultValue={""}
                                                />
                                            </div>
                                            <div className="col-md-4">
                                                <label
                                                    htmlFor="formFile"
                                                    className="form-label"
                                                >
                                                    Default file input example
                                                </label>
                                                <input
                                                    onChange={handlePhotoChange}
                                                    className="form-control"
                                                    type="file"
                                                    id="formFile"
                                                />
                                            </div>

                                            <div className="col-md-12">
                                                <label
                                                    htmlFor="formFile"
                                                    className="form-label"
                                                ></label>
                                                {photoPreview && (
                                                    <img
                                                        src={photoPreview}
                                                        alt="Organisation Preview"
                                                        className="p-1 bg-primary"
                                                        with={180}
                                                        height={180}
                                                    />
                                                )}
                                            </div>

                                            <div className="col-md-12">
                                                <div className="d-md-flex d-grid align-items-center gap-3">
                                                    <button
                                                        type="submit"
                                                        className="btn btn-primary px-4"
                                                    >
                                                        Submit
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="btn btn-light px-4"
                                                    >
                                                        Cancel
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
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

export default CreateOrganisation;

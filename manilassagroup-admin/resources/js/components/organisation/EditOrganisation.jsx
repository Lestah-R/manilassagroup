import React, { useEffect, useState, useContext } from "react";
import { useImmerReducer } from "use-immer";
import Page from "../Page";
import { useParams } from "react-router-dom";
import Axios from "axios";
import StateContext from "../../StateContext";
import DispatchContext from "../../DispatchContext";
import LoadingDotsIcon from "../LoadingDotsIcon";

function EditOrganisation() {
    const appState = useContext(StateContext);
    const appDispatch = useContext(DispatchContext);

    const originalState = {
        name: {
            value: "",
            hasErrors: false,
            message: "",
        },
        description: {
            value: "",
            hasErrors: false,
            message: "",
        },
        photo: {
            value: "",
            hasErrors: false,
            message: "",
        },
        isFetching: true,
        isSaving: false,
        id: useParams().id, // this will pull id from url
        sendCount: 0,
    };

    function ourReducer(draft, action) {
        switch (action.type) {
            case "fetchComplete":
                draft.name.value = action.value.name;
                draft.description.value = action.value.description;
                draft.photo.value = action.value.photo;
                draft.isFetching = false;
                return;
            case "nameChange":
                draft.name.value = action.value;
                return;
            case "descriptionChange":
                draft.description.value = action.value;
                return;
            case "submitRequest":
                draft.sendCount++;
                return;
            case "saveRequestStarted":
                draft.isSaving = true;
                return;
            case "saveRequestFinished":
                draft.isSaving = false;
                return;
        }
    }

    const [state, dispatch] = useImmerReducer(ourReducer, originalState);

    //start of image update
    const [selectedImage, setSelectedImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [existingImage, setExistingImage] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        // Fetch existing organisation details
        Axios.get(`/api/organisations/${id}`, {
            headers: { Authorization: `Bearer ${appState.user.token}` },
        })
            .then((response) => {
                const imagePath = response.data.organisation.image_path;
                if (imagePath) {
                    setExistingImage(
                        `/storage/organisation_images/${imagePath}`
                    );
                }
            })
            .catch((error) =>
                console.error("Error fetching organisation:", error)
            );
    }, [id, appState.user.token]);

    function handleImageChange(e) {
        const file = e.target.files[0];
        if (file) {
            setSelectedImage(file);
            setImagePreview(URL.createObjectURL(file)); // Create a preview URL
        }
    }

    function handleImageSubmit(e) {
        e.preventDefault();
        if (!selectedImage) return;

        const formData = new FormData();
        formData.append("image", selectedImage);

        Axios.put(`/api/update-image-orgnanisation/${state.id}`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${appState.user.token}`,
            },
        })
            .then((response) => {
                appDispatch({
                    type: "flashMessage",
                    value: "Image updated successfully",
                });
                // Update the existing image URL
                setExistingImage(
                    `/storage/organisation_images/${response.data.organisation.image_path}`
                );
            })
            .catch((error) => console.error("Error updating image:", error));
    }

    //end of image update funcitonality

    function submitHandler(e) {
        e.preventDefault();
        dispatch({ type: "submitRequest" });
    }

    useEffect(() => {
        const ourRequest = Axios.CancelToken.source();

        const fetchOrganisation = async () => {
            try {
                const response = await Axios.get(
                    `/api/organisations/${state.id}`,
                    {
                        headers: {
                            Authorization: `Bearer ${appState.user.token}`,
                        },
                        cancelToken: ourRequest.token,
                    }
                );
                if (response.data.status) {
                    dispatch({
                        type: "fetchComplete",
                        value: response.data.organisation,
                    });
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

    useEffect(() => {
        if (state.sendCount) {
            dispatch({ type: "savedRequestStarted" });
            // const ourRequest = Axios.CancelToken.source();

            const fetchOrganisation = async () => {
                try {
                    const response = await Axios.put(
                        `/api/organisations/${state.id}`,
                        {
                            name: state.name.value,
                            description: state.description.value,
                        },
                        {
                            headers: {
                                Authorization: `Bearer ${appState.user.token}`,
                            },
                            // cancelToken: ourRequest.token,
                        }
                    );
                    console.log("Response received:", response.data);
                    dispatch({ type: "saveRequestFinished" });
                    appDispatch({
                        type: "flashMessage",
                        value: "Organisation was updated Succesfully",
                    });
                } catch (error) {
                    console.error(
                        "There was an error fetching the single organisation",
                        error
                    );
                }
            };

            fetchOrganisation();
        }
    }, [state.sendCount]);

    if (state.isFetching)
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
            <Page title="Edit Organisation">
                <div className="page-wrapper">
                    <div className="page-content">
                        <div className="row">
                            <div className="col-xl-12 mx-auto">
                                <div className="card">
                                    <div className="card-body p-4">
                                        <h5 className="mb-4">
                                            Edit Organisation
                                        </h5>
                                        <form
                                            onSubmit={submitHandler}
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
                                                        dispatch({
                                                            type: "nameChange",
                                                            value: e.target
                                                                .value,
                                                        })
                                                    }
                                                    value={state.name.value}
                                                    autoFocus
                                                    name="name"
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
                                                        dispatch({
                                                            type: "descriptionChange",
                                                            value: e.target
                                                                .value,
                                                        })
                                                    }
                                                    value={
                                                        state.description.value
                                                    }
                                                    name="description"
                                                    className="form-control"
                                                    id="input122"
                                                    rows={4}
                                                />
                                            </div>

                                            <div className="col-md-12">
                                                <div className="d-md-flex d-grid align-items-center gap-3">
                                                    <button
                                                        type="submit"
                                                        className="btn btn-primary px-4"
                                                        disabled={
                                                            state.isSaving
                                                        }
                                                    >
                                                        Save Changes
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
                                <div className="card">
                                    <div className="card-body p4">
                                        <h5 className="mb-4">Edit Image</h5>
                                        <form
                                            className="form row g-3"
                                            onSubmit={handleImageSubmit}
                                        >
                                            <div className="col-md-4">
                                                <label
                                                    htmlFor="formFile"
                                                    className="form-label"
                                                >
                                                    Default file input example
                                                </label>
                                                <input
                                                    className="form-control"
                                                    type="file"
                                                    id="formFile"
                                                    onChange={handleImageChange}
                                                />
                                            </div>

                                            <div className="col-md-12">
                                                <label
                                                    htmlFor="formFile"
                                                    className="form-label"
                                                ></label>

                                                <img
                                                    // src={`/storage/${state.photo.value}`}
                                                    src={
                                                        imagePreview ||
                                                        (state.photo.value
                                                            ? `/storage/${state.photo.value}`
                                                            : "/default-image.jpg")
                                                    }
                                                    alt="Organisation Preview"
                                                    className="p-1 bg-primary"
                                                    width={180}
                                                    height={180}
                                                />
                                            </div>
                                            <div className="col-md-12">
                                                <div className="d-md-flex d-grid align-items-center gap-3">
                                                    <button
                                                        type="submit"
                                                        className="btn btn-primary px-4"
                                                    >
                                                        Update Image
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

export default EditOrganisation;

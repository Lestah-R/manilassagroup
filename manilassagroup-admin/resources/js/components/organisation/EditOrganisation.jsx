import React, { useEffect, useState, useContext } from "react";
import { useImmerReducer } from "use-immer";
import Page from "../Page";
import { Link, useParams } from "react-router-dom";
import Axios from "axios";
import StateContext from "../../StateContext";
import DispatchContext from "../../DispatchContext";
import LoadingDotsIcon from "../LoadingDotsIcon";
import NotFound from "../NotFound";

function EditOrganisation() {
    const appState = useContext(StateContext);
    const appDispatch = useContext(DispatchContext);

    const { id } = useParams();

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
        notFound: false,
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
                draft.name.hasErrors = false;
                draft.name.value = action.value;
                return;
            case "descriptionChange":
                draft.description.hasErrors = false;
                draft.description.value = action.value;
                return;
            case "photoChange":
                draft.photo.value = action.value;
                return;
            case "submitRequest":
                if (!draft.name.hasErrors && !draft.description.hasErrors) {
                    draft.sendCount++;
                }
                // draft.sendCount++;
                return;
            case "saveRequestStarted":
                draft.isSaving = true;
                return;
            case "saveRequestFinished":
                draft.isSaving = false;
                return;
            case "nameRules":
                if (!action.value.trim()) {
                    draft.name.hasErrors = true;
                    draft.name.message = "You must provide a name";
                }
                return;
            case "descriptionRules":
                if (!action.value.trim()) {
                    draft.description.hasErrors = true;
                    draft.description.message =
                        "You must provide a description";
                }
                return;
            case "notFound":
                draft.notFound = true;
                return;
        }
    }

    const [state, dispatch] = useImmerReducer(ourReducer, originalState);

    //start of image update
    const [photo, setPhoto] = useState(null);
    const [photoPreview, setPhotoPreview] = useState(null);

    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        // Check if a file is selected
        if (file) {
            setPhoto(file);
            setPhotoPreview(URL.createObjectURL(file));
            console.log("Selected file:", file);
        } else {
            console.error("No file selected");
        }
    };

    const handlePhotoSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();

        if (photo) {
            formData.append("photo", photo);
        } else {
            console.error("No photo selected");
        }

        // Log FormData entries for debugging
        for (let [key, value] of formData.entries()) {
            console.log(key, value);
        }

        try {
            const updateResponse = await Axios.post(
                `/api/update-image-organisation/${id}`,
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        Authorization: `Bearer ${appState.user.token}`,
                    },
                }
            );
            console.log("Update Response:", updateResponse.data);

            // const fetchResponse = await Axios.get(`/api/organisations/${id}`, {
            //     headers: { Authorization: `Bearer ${appState.user.token}` },
            // });
            // dispatch({
            //     type: "photoChange",
            //     value: fetchResponse.data.organisation,
            // });

            appDispatch({
                type: "flashMessage",
                value: "You have updated the image successfully",
            });

            // console.log("Fetch Response:", fetchResponse.data);
        } catch (error) {
            console.error(error);
        }
    };

    //end of image update funcitonality

    function submitHandler(e) {
        e.preventDefault();
        dispatch({ type: "nameRules", value: state.name.value });
        dispatch({ type: "descriptionRules", value: state.description.value });
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
                if (response.data) {
                    dispatch({
                        type: "fetchComplete",
                        value: response.data.organisation,
                    });
                } else {
                    dispatch({
                        type: "notFound",
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

    if (state.notFound) {
        return <NotFound />;
    }

    if (state.isFetching) {
        return (
            <div className="page-wrapper">
                <div className="page-content">
                    <LoadingDotsIcon />
                </div>
            </div>
        );
    }

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
                                                    onBlur={(e) =>
                                                        dispatch({
                                                            type: "nameRules",
                                                            value: e.target
                                                                .value,
                                                        })
                                                    }
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
                                                {state.name.hasErrors && (
                                                    <p className="text-danger">
                                                        {state.name.message}
                                                    </p>
                                                )}
                                            </div>
                                            <div className="col-md-12">
                                                <label
                                                    htmlFor="input11"
                                                    className="form-label"
                                                >
                                                    Description
                                                </label>
                                                <textarea
                                                    onBlur={(e) =>
                                                        dispatch({
                                                            type: "descriptionRules",
                                                            value: e.target
                                                                .value,
                                                        })
                                                    }
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
                                                {state.description
                                                    .hasErrors && (
                                                    <p className="text-danger">
                                                        {
                                                            state.description
                                                                .message
                                                        }
                                                    </p>
                                                )}
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
                                            onSubmit={handlePhotoSubmit}
                                            encType="multipart/form-data"
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
                                                    name="photo"
                                                    onChange={handlePhotoChange} // This function will handle image selection
                                                />
                                            </div>

                                            <div className="col-md-12">
                                                <label
                                                    htmlFor="formFile"
                                                    className="form-label"
                                                ></label>

                                                <img
                                                    src={
                                                        photoPreview || // If a new image is selected, show its preview
                                                        (state.photo.value
                                                            ? `/storage/${
                                                                  state.photo
                                                                      .value
                                                              }?${new Date().getTime()}`
                                                            : "/default-image.jpg") // Otherwise, show the current photo or a default image
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

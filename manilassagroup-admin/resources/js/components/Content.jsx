import React, { useEffect } from "react";

function Content() {
    return (
        <>
            <div className="page-wrapper">
                <div className="page-content">
                    {/*breadcrumb*/}
                    <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
                        <div className="breadcrumb-title pe-3">Forms</div>
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
                                        Form Elements
                                    </li>
                                </ol>
                            </nav>
                        </div>
                        <div className="ms-auto">
                            <div className="btn-group">
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                >
                                    Settings
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-primary split-bg-primary dropdown-toggle dropdown-toggle-split"
                                    data-bs-toggle="dropdown"
                                >
                                    {" "}
                                    <span className="visually-hidden">
                                        Toggle Dropdown
                                    </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-right dropdown-menu-lg-end">
                                    {" "}
                                    <a
                                        className="dropdown-item"
                                        href="javascript:;"
                                    >
                                        Action
                                    </a>
                                    <a
                                        className="dropdown-item"
                                        href="javascript:;"
                                    >
                                        Another action
                                    </a>
                                    <a
                                        className="dropdown-item"
                                        href="javascript:;"
                                    >
                                        Something else here
                                    </a>
                                    <div className="dropdown-divider" />{" "}
                                    <a
                                        className="dropdown-item"
                                        href="javascript:;"
                                    >
                                        Separated link
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*end breadcrumb*/}
                    <div className="row">
                        <div className="col-xl-9 mx-auto">
                            <h6 className="mb-0 text-uppercase">Text Inputs</h6>
                            <hr />
                            <div className="card">
                                <div className="card-body">
                                    <input
                                        className="form-control form-control-lg mb-3"
                                        type="text"
                                        placeholder=".form-control-lg"
                                        aria-label=".form-control-lg example"
                                    />
                                    <input
                                        className="form-control mb-3"
                                        type="text"
                                        placeholder="Default input"
                                        aria-label="default input example"
                                    />
                                    <input
                                        className="form-control form-control-sm mb-3"
                                        type="text"
                                        placeholder=".form-control-sm"
                                        aria-label=".form-control-sm example"
                                    />
                                    <input
                                        className="form-control mb-3"
                                        type="text"
                                        placeholder="Disabled input"
                                        aria-label="Disabled input example"
                                        disabled=""
                                    />
                                    <input
                                        className="form-control mb-3"
                                        type="text"
                                        placeholder="Disabled readonly input"
                                        aria-label="Disabled input example"
                                        disabled=""
                                        readOnly=""
                                    />
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Readonly input here..."
                                        aria-label="readonly input example"
                                        readOnly=""
                                    />
                                </div>
                            </div>
                            <h6 className="mb-0 text-uppercase">
                                Select Inputs
                            </h6>
                            <hr />
                            <div className="card">
                                <div className="card-body">
                                    <select
                                        className="form-select mb-3"
                                        aria-label="Default select example"
                                    >
                                        <option selected="">
                                            Open this select menu
                                        </option>
                                        <option value={1}>One</option>
                                        <option value={2}>Two</option>
                                        <option value={3}>Three</option>
                                    </select>
                                    <select
                                        className="form-select form-select-lg mb-3"
                                        aria-label=".form-select-lg example"
                                    >
                                        <option selected="">
                                            Open this select menu
                                        </option>
                                        <option value={1}>One</option>
                                        <option value={2}>Two</option>
                                        <option value={3}>Three</option>
                                    </select>
                                    <select
                                        className="form-select form-select-sm mb-3"
                                        aria-label=".form-select-sm example"
                                    >
                                        <option selected="">
                                            Open this select menu
                                        </option>
                                        <option value={1}>One</option>
                                        <option value={2}>Two</option>
                                        <option value={3}>Three</option>
                                    </select>
                                    <select
                                        className="form-select"
                                        aria-label="Disabled select example"
                                        disabled=""
                                    >
                                        <option selected="">
                                            Open this select menu
                                        </option>
                                        <option value={1}>One</option>
                                        <option value={2}>Two</option>
                                        <option value={3}>Three</option>
                                    </select>
                                </div>
                            </div>
                            <h6 className="mb-0 text-uppercase">File input</h6>
                            <hr />
                            <div className="card">
                                <div className="card-body">
                                    <div className="mb-3">
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
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label
                                            htmlFor="formFileMultiple"
                                            className="form-label"
                                        >
                                            Multiple files input example
                                        </label>
                                        <input
                                            className="form-control"
                                            type="file"
                                            id="formFileMultiple"
                                            multiple=""
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label
                                            htmlFor="formFileDisabled"
                                            className="form-label"
                                        >
                                            Disabled file input example
                                        </label>
                                        <input
                                            className="form-control"
                                            type="file"
                                            id="formFileDisabled"
                                            disabled=""
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label
                                            htmlFor="formFileSm"
                                            className="form-label"
                                        >
                                            Small file input example
                                        </label>
                                        <input
                                            className="form-control form-control-sm"
                                            id="formFileSm"
                                            type="file"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="formFileLg"
                                            className="form-label"
                                        >
                                            Large file input example
                                        </label>
                                        <input
                                            className="form-control form-control-lg"
                                            id="formFileLg"
                                            type="file"
                                        />
                                    </div>
                                </div>
                            </div>
                            <h6 className="mb-0 text-uppercase">Datalists</h6>
                            <hr />
                            <div className="card">
                                <div className="card-body">
                                    <label
                                        htmlFor="exampleDataList"
                                        className="form-label"
                                    >
                                        Datalist example
                                    </label>
                                    <input
                                        className="form-control"
                                        list="datalistOptions"
                                        id="exampleDataList"
                                        placeholder="Type to search..."
                                    />
                                    <datalist id="datalistOptions">
                                        <option value="San Francisco"></option>
                                        <option value="New York"></option>
                                        <option value="Seattle"></option>
                                        <option value="Los Angeles"></option>
                                        <option value="Chicago"></option>
                                    </datalist>
                                </div>
                            </div>
                            <h6 className="mb-0 text-uppercase">
                                Checkboxes and radios
                            </h6>
                            <hr />
                            <div className="card">
                                <div className="card-body">
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            defaultValue=""
                                            id="flexCheckDefault"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="flexCheckDefault"
                                        >
                                            Default checkbox
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            defaultValue=""
                                            id="flexCheckChecked"
                                            defaultChecked=""
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="flexCheckChecked"
                                        >
                                            Checked checkbox
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            defaultValue=""
                                            id="flexCheckIndeterminate"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="flexCheckIndeterminate"
                                        >
                                            Indeterminate checkbox
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            defaultValue=""
                                            id="flexCheckDisabled"
                                            disabled=""
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="flexCheckDisabled"
                                        >
                                            Disabled checkbox
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            defaultValue=""
                                            id="flexCheckCheckedDisabled"
                                            defaultChecked=""
                                            disabled=""
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="flexCheckCheckedDisabled"
                                        >
                                            Disabled checked checkbox
                                        </label>
                                    </div>
                                    <hr />
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="flexRadioDefault"
                                            id="flexRadioDefault1"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="flexRadioDefault1"
                                        >
                                            Default radio
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="flexRadioDefault"
                                            id="flexRadioDefault2"
                                            defaultChecked=""
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="flexRadioDefault2"
                                        >
                                            Default checked radio
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="flexRadioDisabled"
                                            id="flexRadioDisabled"
                                            disabled=""
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="flexRadioDisabled"
                                        >
                                            Disabled radio
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="flexRadioDisabled"
                                            id="flexRadioCheckedDisabled"
                                            defaultChecked=""
                                            disabled=""
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="flexRadioCheckedDisabled"
                                        >
                                            Disabled checked radio
                                        </label>
                                    </div>
                                    <hr />
                                    <div className="form-check form-switch">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="flexSwitchCheckDefault"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="flexSwitchCheckDefault"
                                        >
                                            Default switch checkbox input
                                        </label>
                                    </div>
                                    <div className="form-check form-switch">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="flexSwitchCheckChecked"
                                            defaultChecked=""
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="flexSwitchCheckChecked"
                                        >
                                            Checked switch checkbox input
                                        </label>
                                    </div>
                                    <div className="form-check-danger form-check form-switch">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="flexSwitchCheckCheckedDanger"
                                            defaultChecked=""
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="flexSwitchCheckCheckedDanger"
                                        >
                                            Checked switch checkbox input
                                        </label>
                                    </div>
                                    <div className="form-check form-switch">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="flexSwitchCheckDisabled"
                                            disabled=""
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="flexSwitchCheckDisabled"
                                        >
                                            Disabled switch checkbox input
                                        </label>
                                    </div>
                                    <div className="form-check form-switch">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="flexSwitchCheckCheckedDisabled"
                                            defaultChecked=""
                                            disabled=""
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="flexSwitchCheckCheckedDisabled"
                                        >
                                            Disabled checked switch checkbox
                                            input
                                        </label>
                                    </div>
                                    <hr />
                                    <div className="form-check form-check-inline">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="inlineCheckbox1"
                                            defaultValue="option1"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="inlineCheckbox1"
                                        >
                                            1
                                        </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="inlineCheckbox2"
                                            defaultValue="option2"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="inlineCheckbox2"
                                        >
                                            2
                                        </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="inlineCheckbox3"
                                            defaultValue="option3"
                                            disabled=""
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="inlineCheckbox3"
                                        >
                                            3 (disabled)
                                        </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="inlineRadioOptions"
                                            id="inlineRadio1"
                                            defaultValue="option1"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="inlineRadio1"
                                        >
                                            1
                                        </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="inlineRadioOptions"
                                            id="inlineRadio2"
                                            defaultValue="option2"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="inlineRadio2"
                                        >
                                            2
                                        </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="inlineRadioOptions"
                                            id="inlineRadio3"
                                            defaultValue="option3"
                                            disabled=""
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="inlineRadio3"
                                        >
                                            3 (disabled)
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <h6 className="mb-0 text-uppercase">Input Mask</h6>
                            <hr />
                            <div className="card">
                                <div className="card-body">
                                    <form>
                                        <div className="mb-3">
                                            <label className="form-label">
                                                Date:
                                            </label>
                                            <input
                                                type="date"
                                                className="form-control"
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">
                                                Date time:
                                            </label>
                                            <input
                                                type="datetime-local"
                                                className="form-control"
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">
                                                Email:
                                            </label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                placeholder="example@gmail.com"
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">
                                                Password:
                                            </label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                defaultValue="........"
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">
                                                Input File:
                                            </label>
                                            <input
                                                type="file"
                                                className="form-control"
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">
                                                Month:
                                            </label>
                                            <input
                                                type="month"
                                                className="form-control"
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">
                                                Search:
                                            </label>
                                            <input
                                                type="search"
                                                className="form-control"
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">
                                                Tel:
                                            </label>
                                            <input
                                                type="tel"
                                                className="form-control"
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">
                                                Time:
                                            </label>
                                            <input
                                                type="time"
                                                className="form-control"
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">
                                                Url:
                                            </label>
                                            <input
                                                type="url"
                                                className="form-control"
                                                placeholder="https://example.com/users/"
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">
                                                Week:
                                            </label>
                                            <input
                                                type="week"
                                                className="form-control"
                                            />
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <h6 className="mb-0 text-uppercase">Input Tags</h6>
                            <hr />
                            <div className="card">
                                <div className="card-body">
                                    <form>
                                        <div className="mb-3">
                                            <label className="form-label">
                                                Basic
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                data-role="tagsinput"
                                                defaultValue="jQuery,Script,Net"
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">
                                                Multi Select
                                            </label>
                                            <select
                                                multiple=""
                                                data-role="tagsinput"
                                            >
                                                <option value="Amsterdam">
                                                    Amsterdam
                                                </option>
                                                <option value="Washington">
                                                    Washington
                                                </option>
                                                <option value="Sydney">
                                                    Sydney
                                                </option>
                                                <option value="Beijing">
                                                    Beijing
                                                </option>
                                                <option value="Cairo">
                                                    Cairo
                                                </option>
                                            </select>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <h6 className="mb-0 text-uppercase">
                                Range Inputs
                            </h6>
                            <hr />
                            <div className="card">
                                <div className="card-body">
                                    <div className="mb-3">
                                        <label
                                            htmlFor="customRange1"
                                            className="form-label"
                                        >
                                            Example range
                                        </label>
                                        <input
                                            type="range"
                                            className="form-range"
                                            id="customRange1"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label
                                            htmlFor="disabledRange"
                                            className="form-label"
                                        >
                                            Disabled range
                                        </label>
                                        <input
                                            type="range"
                                            className="form-range"
                                            id="disabledRange"
                                            disabled=""
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label
                                            htmlFor="customRange2"
                                            className="form-label"
                                        >
                                            Example range
                                        </label>
                                        <input
                                            type="range"
                                            className="form-range"
                                            min={0}
                                            max={5}
                                            id="customRange2"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*end row*/}
                </div>
            </div>
        </>
    );
}

export default Content;

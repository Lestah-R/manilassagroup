import React from "react";
import { NavLink } from "react-router-dom";

function SideBar() {
    return (
        <div className="sidebar-wrapper" data-simplebar="true">
            <div className="sidebar-header">
                <div>
                    <img
                        src="/ssa-logo.png"
                        className="logo-icon"
                        alt="logo icon"
                    />
                </div>
                <div>
                    <h4 className="logo-text">Admin</h4>
                </div>
                <div className="toggle-icon ms-auto">
                    <i className="bx bx-arrow-back" />
                </div>
            </div>
            {/*navigation*/}
            <ul className="metismenu" id="menu">
                <li>
                    <a href="widgets.html">
                        <div className="parent-icon">
                            <i className="bx bx-home-alt" />
                        </div>
                        <div className="menu-title">Dashboard</div>
                    </a>
                </li>
                <li className="menu-label">UI Elements</li>
                <li>
                    <a href="javascript:;" className="has-arrow">
                        <div className="parent-icon">
                            {/* <i className="bx bx-cart" /> */}
                            <i class="bx bx-message-square-edit" />
                        </div>
                        <div className="menu-title">Post</div>
                    </a>
                    <ul>
                        <li>
                            {" "}
                            <NavLink to="/organisation" end>
                                <i className="bx bx-radio-circle"></i>
                                Organisation
                            </NavLink>
                        </li>
                    </ul>
                </li>
                <li>
                    <a className="has-arrow" href="javascript:;">
                        <div className="parent-icon">
                            {/* <i className="bx bx-bookmark-heart" /> */}
                            <i className="bx bx-cart" />
                        </div>
                        <div className="menu-title">Shop</div>
                    </a>
                    <ul>
                        <li>
                            {" "}
                            <a href="component-alerts.html">
                                <i className="bx bx-radio-circle" />
                                e-books
                            </a>
                        </li>
                        <li>
                            {" "}
                            <a href="component-accordions.html">
                                <i className="bx bx-radio-circle" />
                                courses
                            </a>
                        </li>
                    </ul>
                </li>
                <li className="menu-label">Charts &amp; Maps</li>
                <li>
                    <a className="has-arrow" href="javascript:;">
                        <div className="parent-icon">
                            <i className="bx bx-line-chart" />
                        </div>
                        <div className="menu-title">Charts</div>
                    </a>
                    <ul>
                        <li>
                            {" "}
                            <a href="charts-apex-chart.html">
                                <i className="bx bx-radio-circle" />
                                Apex
                            </a>
                        </li>
                        <li>
                            {" "}
                            <a href="charts-chartjs.html">
                                <i className="bx bx-radio-circle" />
                                Chartjs
                            </a>
                        </li>
                        <li>
                            {" "}
                            <a href="charts-highcharts.html">
                                <i className="bx bx-radio-circle" />
                                Highcharts
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a className="has-arrow" href="javascript:;">
                        <div className="parent-icon">
                            <i className="bx bx-map-alt" />
                        </div>
                        <div className="menu-title">Maps</div>
                    </a>
                    <ul>
                        <li>
                            {" "}
                            <a href="map-google-maps.html">
                                <i className="bx bx-radio-circle" />
                                Google Maps
                            </a>
                        </li>
                        <li>
                            {" "}
                            <a href="map-vector-maps.html">
                                <i className="bx bx-radio-circle" />
                                Vector Maps
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a
                        href="https://themeforest.net/user/codervent"
                        target="_blank"
                    >
                        <div className="parent-icon">
                            <i className="bx bx-support" />
                        </div>
                        <div className="menu-title">Support</div>
                    </a>
                </li>
            </ul>
            {/*end navigation*/}
        </div>
    );
}

export default SideBar;

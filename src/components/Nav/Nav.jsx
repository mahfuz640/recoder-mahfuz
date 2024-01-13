"use client";
import React, { useState } from "react";
import Image from "next/image";
import logoWhite from "@/imgs/logo-white.png";
import mediaPng from "@/imgs/media.png";
import avatarPng from "@/imgs/avatar.png";
import "../../../node_modules/bootstrap/dist/js/bootstrap.min";

import ReactTyped from "react-typed";
import Link from "next/link";
const Nav = () => {
  // for auth 
  const [login, setLogin] = useState(true);
  return (
    <div style={{ backgroundColor: "rgb(248, 242, 242)" }}>
      <div className="fluid-container">
        <nav className="navbar navbar-expand-lg bg-light navbar-custom">
          <div className="container-fluid">
            <Link className="navbar-brand navbar-brand-custom" href={"/"}>
              <Image
                src={logoWhite}
                width={320}
                alt="number one"
                className="nav--img d-inline-block align-text-top"
              />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNav"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nnn nav-link" aria-current="page" href={'/'}>
                    <span className="tess">Home</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#features">
                    Features
                  </a>
                </li>
              
                {login && (
                  <li className="nav-item">
                    <Link className="nav-link" href={"/profile"}>
                      Profile
                    </Link>
                  </li>
                )}
                <li className="nav-item">
                  <Link className="nav-link" href="/#faq">
                    FAQ{" "}
                  </Link>
                </li>
                <li>
                  {/* Button trigger modal */}
                  <button
                    type="button"
                    className="btn "
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                  >
                    Sign Up
                  </button>
                  {/* Modal */}
                  <div
                    className="modal fade "
                    id="staticBackdrop"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabIndex={-1}
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      {/* from */}
                      <div className="modal-content bg-dark ">
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                        <form className="">
                          <div className="container cona ">
                            <h1 className="form-title">Registration</h1>
                            <h2 style={{ color: "white", fontSize: "medium" }}>
                              Upload your picture
                            </h2>
                            <div className="upload">
                              <button type="button" className="btn-warning">
                                <i className="fa fa-upload" /> Upload File
                                <input type="file" />
                              </button>
                            </div>
                            <div className="main-user-info">
                              <div className="user-input-box">
                                <label htmlFor="fullName">Full Name</label>
                                <input
                                  type="text"
                                  id="fullName"
                                  name="fullName"
                                  placeholder="Enter Full Name"
                                />
                              </div>
                              <div className="user-input-box">
                                <label htmlFor="username">Username</label>
                                <input
                                  type="text"
                                  id="username"
                                  name="username"
                                  placeholder="Enter Username"
                                />
                              </div>
                              <div className="user-input-box">
                                <label htmlFor="email">Email</label>
                                <input
                                  type="email"
                                  id="email"
                                  name="email"
                                  placeholder="Enter Email"
                                />
                              </div>
                              <div className="user-input-box">
                                <label htmlFor="phoneNumber">
                                  Phone Number
                                </label>
                                <input
                                  type="text"
                                  id="phoneNumber"
                                  name="phoneNumber"
                                  placeholder="Enter Phone Number"
                                />
                              </div>
                              <div className="user-input-box">
                                <label htmlFor="password">Password</label>
                                <input
                                  type="password"
                                  id="password"
                                  name="password"
                                  placeholder="Enter Password"
                                />
                              </div>
                              <div className="user-input-box">
                                <label htmlFor="confirmPassword">
                                  Confirm Password
                                </label>
                                <input
                                  type="password"
                                  id="confirmPassword"
                                  name="confirmPassword"
                                  placeholder="Confirm Password"
                                />
                              </div>
                            </div>
                            <div className="gender-details-box">
                              <span className="gender-title">Gender</span>
                              <div className="gender-category">
                                <input type="radio" name="gender" id="male" />
                                <label htmlFor="male">Male</label>
                                <input type="radio" name="gender" id="female" />
                                <label htmlFor="female">Female</label>
                              </div>
                            </div>
                            <div className="form-submit-btn">
                              <input type="submit" defaultValue="Register" />
                            </div>
                            <div>
                              {" "}
                              <a className="" href="#">
                                <Image
                                  // style={{
                                  //   width: 50,
                                  //   height: 50,
                                  //   marginTop: "5%",
                                  // }}
                                  width={50}
                                  height={50}
                                  src={mediaPng}
                                  alt="google mail"
                                />
                              </a>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            {/* log in */}
            <div className="ms-1">
              {/* Button trigger modal */}
              <button
                type="button"
                className="btn "
                data-bs-toggle="modal"
                data-bs-target="#loginModalToggle"
              >
                Log In
              </button>
              {/* Modal */}
              <div
                className="modal fade"
                id="loginModalToggle"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="logi-box">
                      <Image src={avatarPng} width={120} className="avatar" />
                      <h1 className="hea">Login Here</h1>
                      <form>
                        <p>Username | Email ID</p>
                        <input
                          type="text"
                          name="Email"
                          placeholder="Enter Username"
                        />
                        <p>Password</p>
                        <input
                          type="password"
                          name="password"
                          placeholder="Enter Password"
                        />
                        <input
                          type="submit"
                          name="submit"
                          defaultValue="Login"
                        />
                        <a data-bs-toggle="modal" href="#forgetModalToggle">
                          Forget Password
                        </a>
                        |
                        <a
                          className="btn "
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop"
                        >
                          Registration
                        </a>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="modal fade"
                id="forgetModalToggle"
                aria-hidden="true"
                aria-labelledby="forgetModalToggleLabel"
                tabIndex={-1}
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="logi-box">
                      <Image src={avatarPng} width={120} className="avatar" />
                      <h1 className="hea">Forget Account</h1>
                      <input
                        type="text"
                        name="Email"
                        placeholder="Enter Username/Email"
                      />
                      <button
                        className="btn "
                        data-bs-target="#examleModalToggle2"
                        data-bs-toggle="modal"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="modal fade"
              id="examleModalToggle2"
              aria-hidden="true"
              aria-labelledby="examleModalToggleLabel2"
              tabIndex={-1}
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="logi-box">
                    <Image src={avatarPng} width={120} className="avatar" />
                    <h1 className="hea">Confimation</h1>
                    <input
                      type="text"
                      name="code"
                      placeholder="Enter Varification Code"
                    />
                    <button
                      className="btn"
                      data-bs-target="#examleModalToggle3"
                      data-bs-toggle="modal"
                    >
                      Confirm
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div
        className="modal fade"
        id="examleModalToggle3"
        aria-hidden="true"
        aria-labelledby="examleModalToggleLabel3"
        tabIndex={-1}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="logi-box">
              <Image src={avatarPng} width={120} className="avatar" />
              <h1 className="hea">Confimation</h1>
              <input type="text" name="text" placeholder="New Password" />
              <input type="text" name="text" placeholder="Confirm Password" />
              <button
                className="btn"
                data-bs-target="#ModalToggle"
                data-bs-toggle="modal"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;

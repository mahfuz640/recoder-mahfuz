
"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import axios from "axios";
import logoWhite from "@/imgs/logo-white.png";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteUserSuccess,
  signOutUserStart,
} from "@/statemanagement/features/user/userSlice";

const Nav = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const currentUser = useSelector((state) => state.user.currentUser);
  console.log(currentUser);
  const dispatch = useDispatch();
  const handleRegister = async (data) => {
    console.log(data);
    setLoading(true);
    try {
      const response = await axios.post("/api/user", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        console.log("Registration successful");
        toast.success("Account created successfully");
        setLoading(false);
      } else {
        // Registration failed, handle the error
        console.error("Registration failed");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false); // Set loading to false when the request is complete
    }
  };

  const logOut = async () => {
    try {
      dispatch(signOutUserStart());
      const res = await fetch("/api/signout");

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const data = await res.json();

      if (data.success === false) {
        dispatch(deleteUserFailure(data.message));
        return;
      }

      // Clear the access token on the client side (assuming you're using cookies)
      // document.cookie = "access_token=; expires=Thu, 01 Jan 1970 00:00:00 GMT";

      dispatch(deleteUserSuccess(data));
      window.location.reload();
    } catch (error) {
      dispatch(deleteUserFailure(error.message));
    }
  };

  return (
    <div style={{ backgroundColor: "rgb(248, 242, 242)" }}>
      <div className="fluid-container">
        <nav className="navbar navbar-expand-lg bg-light navbar-custom">
          <div className="container-fluid">
            <Link className="navbar-brand navbar-brand-custom" href={"/"}>
              {/* ... (your existing code) */}
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
              {/* ... (your existing code) */}
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNav"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nnn nav-link" aria-current="page" href={"/"}>
                    <span className="tess">Home</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#features">
                    Features
                  </a>
                </li>
                {currentUser ? (
                  <li className="nav-item">
                    <Link className="nav-link" href="/problem-solving">
                      Problem solving
                    </Link>
                  </li>
                ) : (
                  <li className="nav-item">
                  <Link className="nav-link" href="/signin">
                    Problem solving
                  </Link>
                </li>
                )}
          
               
                {currentUser ? (
                  <li className="nav-item">
                    <Link className="nav-link" href="/code-converter">
                      Code converter
                    </Link>
                  </li>
                ) : (
                  <li className="nav-item">
                    <Link className="nav-link" href="/signin">
                    Code converter
                    </Link>
                  </li>
                )}
                 <li className="nav-item">
                  <Link className="nav-link" href="/#faq">
                    FAQ{" "}
                  </Link>
                </li>
                {currentUser && currentUser.user.isAdmin && (
                  <li className="nav-item">
                    <Link className="nav-link" href={"/dashboard"}>
                      Dashboard
                    </Link>
                  </li>
                )}
                {/* <li className="nav-item">
                  <Link className="nav-link" href={"/dashboard"}>
                    Dashboard
                  </Link>
                </li> */}

                {currentUser ? (
                  <>
                    <li className="nav-item">
                      <Link className="nav-link" href={"/profile"}>
                        Profile
                      </Link>
                    </li>
                    <li className="nav-item">
                      <button onClick={logOut} className="nav-link">
                        Logout
                      </button>
                    </li>
                  </>
                ) : (
                  <>
                    {/* Your registration and login links directly in the Navbar */}
                    <li className="nav-item">
                      <Link className="btn" href="/signup">
                        Register
                      </Link>
                    </li>
                    <div className="ms-1">
                      <Link className="btn" href="/signin">
                        Login
                      </Link>
                    </div>
                  </>
                )}
              </ul>
              {/* ... (your existing code) */}
            </div>
          </div>
        </nav>
      </div>
      {/* ... (your existing code) */}
    </div>
  );
};

export default Nav;

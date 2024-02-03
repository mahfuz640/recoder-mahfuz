// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import logoWhite from "@/imgs/logo-white.png";
// import mediaPng from "@/imgs/media.png";
// import avatarPng from "@/imgs/avatar.png";
// import "../../../node_modules/bootstrap/dist/js/bootstrap.min";
// import { useForm } from "react-hook-form";
// import ReactTyped from "react-typed";
// import toast from "react-hot-toast";
// import axios from "axios";
// import Link from "next/link";
// import { signIn } from "next-auth/react";
// import { useRouter } from "next/navigation";
// const Nav = () => {
//   // for auth
//   const [login, setLogin] = useState(true);
//   const { register, handleSubmit } = useForm();
//   const [loading, setLoading] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const router = useRouter();

//   const handleRegister = async (data) => {
//     console.log(data);
//     setLoading(true);
//     try {
//       const response = await axios.post("/api/user", data, {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });

//       if (!response.ok) {
//         console.log("Registration successful");
//         toast.success("Account created successful");
//         setLoading(false);
//       } else {
//         // Registration failed, handle the error
//         console.error("Registration failed");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     } finally {
//       setLoading(false); // Set loading to false when the request is complete
//     }
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     const signInData = await signIn("credentials", {
//       email: email,
//       password: password,
//     });

//     if (signInData?.error) {
//       console.log(signInData.error);
//     } else {
//       router.push("/profile");
//     }
//     console.log(signInData);
//   };
//   return (
//     <div style={{ backgroundColor: "rgb(248, 242, 242)" }}>
//       <div className="fluid-container">
//         <nav className="navbar navbar-expand-lg bg-light navbar-custom">
//           <div className="container-fluid">
//             <Link className="navbar-brand navbar-brand-custom" href={"/"}>
//               <Image
//                 src={logoWhite}
//                 width={320}
//                 alt="number one"
//                 className="nav--img d-inline-block align-text-top"
//               />
//             </Link>
//             <button
//               className="navbar-toggler"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#navbarNav"
//               aria-controls="navbarNav"
//               aria-expanded="false"
//               aria-label="Toggle navigation"
//             >
//               <span className="navbar-toggler-icon" />
//             </button>
//             <div
//               className="collapse navbar-collapse justify-content-end"
//               id="navbarNav"
//             >
//               <ul className="navbar-nav">
//                 <li className="nav-item">
//                   <Link className="nnn nav-link" aria-current="page" href={"/"}>
//                     <span className="tess">Home</span>
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" href="/#features">
//                     Features
//                   </a>
//                 </li>
//                 {/* {currentUser ? ( ):() */}
//                 <li className="nav-item">
//                   <Link className="nav-link" href={"/profile"}>
//                     Profile
//                   </Link>
//                 </li>

//                 <li className="nav-item">
//                   <Link className="nav-link" href="/#faq">
//                     FAQ{" "}
//                   </Link>
//                 </li>
//                 <li>
//                   {/* Button trigger modal */}
//                   <button
//                     type="button"
//                     className="btn "
//                     data-bs-toggle="modal"
//                     data-bs-target="#staticBackdrop"
//                   >
//                     Sign Up
//                   </button>
//                   {/* Modal */}
//                   <div
//                     className="modal fade "
//                     id="staticBackdrop"
//                     data-bs-backdrop="static"
//                     data-bs-keyboard="false"
//                     tabIndex={-1}
//                     aria-labelledby="staticBackdropLabel"
//                     aria-hidden="true"
//                   >
//                     <div className="modal-dialog">
//                       {/* from */}
//                       <div className="modal-content bg-dark ">
//                         <button
//                           type="button"
//                           className="btn-close"
//                           data-bs-dismiss="modal"
//                           aria-label="Close"
//                         />
//                         <form
//                           className=""
//                           onSubmit={handleSubmit(handleRegister)}
//                         >
//                           <div className="container cona">
//                             <h1 className="form-title">Registration</h1>
//                             <h2 style={{ color: "white", fontSize: "medium" }}>
//                               Upload your picture
//                             </h2>
//                             <div className="upload">
//                               <button type="button" className="btn-warning">
//                                 <i className="fa fa-upload" /> Upload File
//                                 <input type="file" />
//                               </button>
//                             </div>
//                             <div className="main-user-info">
//                               <div className="user-input-box">
//                                 <label htmlFor="name">Full Name</label>
//                                 <input
//                                   type="text"
//                                   id="name"
//                                   {...register("name")}
//                                   name="name"
//                                   placeholder="Enter Full Name"
//                                 />
//                               </div>
//                               <div className="user-input-box">
//                                 <label htmlFor="username">Username</label>
//                                 <input
//                                   type="text"
//                                   id="username"
//                                   {...register("username")}
//                                   name="username"
//                                   placeholder="Enter Username"
//                                 />
//                               </div>
//                               <div className="user-input-box">
//                                 <label htmlFor="email">Email</label>
//                                 <input
//                                   type="email"
//                                   id="email"
//                                   {...register("email")}
//                                   name="email"
//                                   placeholder="Enter Email"
//                                 />
//                               </div>
//                               {/* <div className="user-input-box">
//         <label htmlFor="phoneNumber">Phone Number</label>
//         <input
//           type="text"
//           id="phoneNumber"
//           {...register("phoneNumber")}
//           name="phoneNumber"
//           placeholder="Enter Phone Number"
//         />
//       </div> */}
//                               <div className="user-input-box">
//                                 <label htmlFor="password">Password</label>
//                                 <input
//                                   type="password"
//                                   id="password"
//                                   {...register("password")}
//                                   name="password"
//                                   placeholder="Enter Password"
//                                 />
//                               </div>
//                               {/* <div className="user-input-box">
//                                 <label htmlFor="confirmPassword">
//                                   Confirm Password
//                                 </label>
//                                 <input
//                                   type="password"
//                                   id="confirmPassword"
//                                   {...register("confirmPassword")}
//                                   name="confirmPassword"
//                                   placeholder="Confirm Password"
//                                 />
//                               </div> */}
//                             </div>
//                             <div className="gender-details-box">
//                               <span className="gender-title">Gender</span>
//                               <div className="gender-category">
//                                 <input type="radio" name="gender" id="male" />
//                                 <label htmlFor="male">Male</label>
//                                 <input type="radio" name="gender" id="female" />
//                                 <label htmlFor="female">Female</label>
//                               </div>
//                             </div>
//                             <div className="form-submit-btn">
//                               <input type="submit" defaultValue="Register" />
//                             </div>
//                             <div>
//                               {" "}
//                               <a className="" href="#">
//                                 <Image
//                                   width={50}
//                                   height={50}
//                                   src={mediaPng}
//                                   alt="google mail"
//                                 />
//                               </a>
//                             </div>
//                           </div>
//                         </form>
//                       </div>
//                     </div>
//                   </div>
//                 </li>
//               </ul>
//             </div>
//             {/* log in */}
//             <div className="ms-1">
//               {/* Button trigger modal */}
//               <Link className="btn" href="/signin">
//                 Login
//               </Link>
//               {/* <button
//                 type="button"
//                 className="btn "
//                 data-bs-toggle="modal"
//                 data-bs-target="#loginModalToggle"
//               >
//                 Log In
//               </button> */}
//               {/* Modal */}
//               <div
//                 className="modal fade"
//                 id="loginModalToggle"
//                 tabIndex={-1}
//                 aria-labelledby="exampleModalLabel"
//                 aria-hidden="true"
//               >
//                 <div className="modal-dialog modal-dialog-centered">
//                   <div className="modal-content">
//                     <div className="logi-box">
//                       <Image src={avatarPng} width={120} className="avatar" />
//                       <h1 className="hea">Login Here</h1>
//                       {/* <form onSubmit={handleLogin}>
//                         <p>Username | Email ID</p>
//                         <input
//                           type="email"
//                           name="email"
//                           onChange={(e) => setEmail(e.target.value)}
//                           placeholder="Enter Username"
//                         />
//                         <p>Password</p>
//                         <input
//                           type="password"
//                           name="password"
//                           onChange={(e) => setPassword(e.target.value)}
//                           placeholder="Enter Password"
//                         />
//                         <input
//                           type="submit"
//                           name="submit"
//                           defaultValue="Login"
//                         />
//                         <a data-bs-toggle="modal" href="#forgetModalToggle">
//                           Forget Password
//                         </a>
//                         |
//                         <a
//                           className="btn "
//                           data-bs-toggle="modal"
//                           data-bs-target="#staticBackdrop"
//                         >
//                           Registration
//                         </a>
//                       </form> */}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div
//                 className="modal fade"
//                 id="forgetModalToggle"
//                 aria-hidden="true"
//                 aria-labelledby="forgetModalToggleLabel"
//                 tabIndex={-1}
//               >
//                 <div className="modal-dialog modal-dialog-centered">
//                   <div className="modal-content">
//                     <div className="logi-box">
//                       <Image src={avatarPng} width={120} className="avatar" />
//                       <h1 className="hea">Forget Account</h1>
//                       <input
//                         type="text"
//                         name="Email"
//                         placeholder="Enter Username/Email"
//                       />
//                       <button
//                         className="btn "
//                         data-bs-target="#examleModalToggle2"
//                         data-bs-toggle="modal"
//                       >
//                         Submit
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div
//               className="modal fade"
//               id="examleModalToggle2"
//               aria-hidden="true"
//               aria-labelledby="examleModalToggleLabel2"
//               tabIndex={-1}
//             >
//               <div className="modal-dialog modal-dialog-centered">
//                 <div className="modal-content">
//                   <div className="logi-box">
//                     <Image src={avatarPng} width={120} className="avatar" />
//                     <h1 className="hea">Confimation</h1>
//                     <input
//                       type="text"
//                       name="code"
//                       placeholder="Enter Varification Code"
//                     />
//                     <button
//                       className="btn"
//                       data-bs-target="#examleModalToggle3"
//                       data-bs-toggle="modal"
//                     >
//                       Confirm
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </nav>
//       </div>
//       <div
//         className="modal fade"
//         id="examleModalToggle3"
//         aria-hidden="true"
//         aria-labelledby="examleModalToggleLabel3"
//         tabIndex={-1}
//       >
//         <div className="modal-dialog modal-dialog-centered">
//           <div className="modal-content">
//             <div className="logi-box">
//               <Image src={avatarPng} width={120} className="avatar" />
//               <h1 className="hea">Confimation</h1>
//               <input type="text" name="text" placeholder="New Password" />
//               <input type="text" name="text" placeholder="Confirm Password" />
//               <button
//                 className="btn"
//                 data-bs-target="#ModalToggle"
//                 data-bs-toggle="modal"
//               >
//                 Done
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Nav;

// Import statements...
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
                      problem solving
                    </Link>
                  </li>
                ) : null}
                {/* <Link className="nav-link" href="/problem-solving">
                  problem solving
                </Link> */}

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


                {currentUser ? (
                  <li className="nav-item">
                    <Link className="nav-link" href={"/profile"}>
                      Profile
                    </Link>

                    <button className="nav-link" onClick={logOut}>
                      Logout
                    </button>
                  </li>
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

"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import {
  signInFailure,
  signInStart,
  signInSuccess,
} from "@/statemanagement/features/user/userSlice";

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // Initialize loading state
  const router = useRouter();
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch("/api/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const data = await res.json();
      console.log(data);

      if (data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      toast.success("Login successful");
      router.push("/");
    } catch (error) {
      console.error("Fetch error:", error.message);
      dispatch(signInFailure(error.message));
    }
  };

  // "/api/signin"
  return (
    <>
      <form onSubmit={handleLogin}>
        <p>Username | Email ID</p>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Username"
        />
        <p>Password</p>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Password"
        />
        {/* <input type="submit" name="submit" defaultValue="Login" /> */}
        <button type="submit" disabled={loading}>
          Login
        </button>
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
    </>
  );
};

export default Page;

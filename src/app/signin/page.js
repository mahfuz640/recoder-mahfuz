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
import Link from "next/link";
import style from "./Signin.module.css";
import logoWhite from "@/imgs/logo-white.png";
import Image from "next/image";

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // Initialize loading state
  const router = useRouter();
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
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
      setLoading(false);
      dispatch(signInSuccess(data));
      toast.success("Login successful");
      router.push("/");
    } catch (error) {
      console.error("Fetch error:", error.message);
      toast.error("Invalid email password credential");
      setLoading(false);
      dispatch(signInFailure(error.message));
    }
  };

  // "/api/signin"
  return (
    <>
      <div className={style.full_body}>
        <div className={style.wrapper}>
          <form onSubmit={handleLogin}>
            <Image width={320} src={logoWhite} alt="" />
            <div className={style.input_box}>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="username or email"
                required
              />
            </div>
            <div className={style.input_box}>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="password"
                required
              />
            </div>

            <button type="submit" className={style.btm}>
              {loading ? "Login in..." : "Login"}
            </button>
            <div className={style.register_link}>
              <p>
                Don&apos;t have an account?
                <Link className={style.limk} href="/signup">
                  Register
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Page;

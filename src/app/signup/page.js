"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm();
  const router = useRouter();
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
        toast.success("Account created successful");
        setLoading(false);
        router.push("/signin");
      } else {
        console.error("Registration failed");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <form className="" onSubmit={handleSubmit(handleRegister)}>
        <div className="container cona">
          <h1 className="form-title">Registration</h1>

          <div className="main-user-info">
            <div className="user-input-box">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                {...register("name")}
                name="name"
                placeholder="Enter Full Name"
              />
            </div>
            <div className="user-input-box">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                {...register("username")}
                name="username"
                placeholder="Enter Username"
              />
            </div>
            <div className="user-input-box">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                {...register("email")}
                name="email"
                placeholder="Enter Email"
              />
            </div>

            <div className="user-input-box">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                {...register("password")}
                name="password"
                placeholder="Enter Password"
              />
            </div>
          </div>

          <div>
            <button className="form-submit-btn" type="submit">
              Register
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Signup;

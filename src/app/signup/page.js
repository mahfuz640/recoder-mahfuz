"use client";
import style from "./Signup.module.css";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Link from "next/link";
import logoWhite from "@/imgs/logo-white.png";
import Image from "next/image";

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
      toast.error("Faild to create account");
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className={style.full_body}>
        <div className={style.wrapper}>
          <form onSubmit={handleSubmit(handleRegister)}>
            <Image width={320} src={logoWhite} alt="" />
            <div className={style.input_box}>
              <input
                {...register("name")}
                type="text"
                id="name"
                placeholder="Your name"
                required
              />
            </div>
            <div className={style.input_box}>
              <input
                {...register("username")}
                type="text"
                id="username"
                placeholder="username"
                required
              />
            </div>
            <div className={style.input_box}>
              <input
                {...register("email")}
                type="email"
                id="email"
                placeholder="Your email"
                required
              />
            </div>
            <div className={style.input_box}>
              <input
                {...register("password")}
                type="password"
                id="password"
                placeholder="Your Password"
                required
              />
            </div>

            <button type="submit" className={style.btm}>
              {loading ? "Creating Account..." : "Register"}
            </button>
            <div className={style.register_link}>
              <p>
                Already have an account?
                <Link className={style.limk} href="/signin">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;

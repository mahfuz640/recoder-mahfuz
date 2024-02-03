"use client";

import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm();

  const handleRegister = async (data) => {
    console.log(data);
    setLoading(true);
    try {
      const response = await axios.post("/api/quiz", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        console.log("Question created successful");
        toast.success("Question created successful");
        setLoading(false);
        window.location.reload();
      } else {
        console.error("creating failed");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div>
        <form className="" onSubmit={handleSubmit(handleRegister)}>
          <div className="container cona">
            <h1 className="form-title">Create Questions</h1>

            <div className="main-user-info">
              <div className="user-input-box">
                <label htmlFor="name">Questions</label>
                <input
                  type="text"
                  id="name"
                  {...register("question")}
                  name="question"
                  placeholder="Enter question"
                />
              </div>

              <div className="user-input-box">
                <label htmlFor="username">answer</label>
                <input
                  type="text"
                  id="answer"
                  {...register("answer")}
                  name="answer"
                  placeholder="Enter answer"
                />
              </div>
            </div>

            <div>
              <button className="form-submit-btn" type="submit">
                Create
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Dashboard;

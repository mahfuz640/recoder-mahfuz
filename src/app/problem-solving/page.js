"use client";
import { useState, useEffect } from "react";
import style from "./Problem.module.css";
import Link from "next/link";

const ProblemSolving = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/getquiz");
        const data = await res.json();
        console.log(data.quizzes);
        console.log(data);
        console.log(data.quizzes.id);
        setPosts(data.quizzes);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
g
    fetchData();
  }, []);

  return (
    <>
      <div className={style.by}>
        <p>Problem solving </p>
        <div className={style.cards}>
          {posts.map((post) => (
            <div className={style.macls} key={post.id}>
              <b>Problem</b>
              <span className={style.textBox}>{post.title}</span>
              <br />
              <div className={style.solve}>
                <Link href={`/problem-solving/${post.id}`}>
                  <button className={style.btm}>Solve</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProblemSolving;

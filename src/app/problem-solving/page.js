"use client";
import React, { useState, useEffect } from "react";

const ProblemSolving = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/getquiz");
        const data = await res.json();
        console.log(data.quizzes);
        setPosts(data.quizzes);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <p>Problem solving </p>
      {posts.map((post) => (
        <li key={post.id}>{post.question}</li>
      ))}
    </div>
  );
};

export default ProblemSolving;

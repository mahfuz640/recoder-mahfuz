"use client";
import CodeTime from "@/components/CodeTime/CodeTime";
import Nav from "@/components/Nav/Nav";
import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";

const Profile = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedFile) {
      console.error("No file selected");
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      const response = await fetch("https://api.imgbb.com/1/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Image uploaded successfully:", data);
        // You can dispatch an action to update the user's image in the Redux store
      } else {
        console.error("Failed to upload image:", response.statusText);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };
  return (
    <div>
      {/* <Nav /> */}
      <div style={{ background: "#ffffff" }}>
        <div
          style={{
            maxWidth: "1140px",
            marginRight: "auto",
            marginLeft: "auto",
          }}
        >
          <p align="center">
            <img
              src="https://i.ibb.co/grxVK2q/Man-sunglasses-portrait-avatar.jpg"
              // src={currentUser?.user.image}
              alt="Man-sunglasses-portrait-avatar"
              width={250}
            />
            <Link href="#">Update</Link>
          </p>
          <h1>
            {" "}
            Hello Fellow &lt;{" "}
            {currentUser ? ` ${currentUser.user.name} />` : " developer"}{" "}
            <img
              src="https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif"
              width="20px"
            />{" "}
            
          </h1>
          <Link href={`/profile/${currentUser.user.id}`} >Update Profile</Link>
          <p align="center"></p>
          <p>
            <img
              src="https://visitor-badge.glitch.me/badge?page_id=sakil470004.sakil470004"
              alt="Profile views"
            />

            <img
              src="https://img.shields.io/github/followers/sakil470004?label=Follow&style=social"
              alt="Github"
            />

            <img
              width={180}
              align="right"
              alt="Github"
              src="https://media.giphy.com/media/M9gbBd9nbDrOTu1Mqx/giphy.gif"
            />
            <Link href="/code">code</Link>
          </p>

          <div size="30px">
            {" "}
            Hi! My name is {currentUser.user.name}. Thank You for taking the time to view my
            GitHub Profile :smile:
          </div>
          <h2>
            {" "}
            About Me{" "}
            
            <img
              src="https://media0.giphy.com/media/KDDpcKigbfFpnejZs6/giphy.gif?cid=ecf05e47oy6f4zjs8g1qoiystc56cu7r9tb8a1fe76e05oty&rid=giphy.gif"
              width="100px"
            />
          </h2>

          <ul>
            <li>
              <p>🔭 I’m currently a student </p>
            </li>
            <li>
              <p>🌱 I’m currently working Frontend and Backend with React</p>
            </li>
            <li>
              <p>👯 I’m looking to collaborate on React project</p>
            </li>
            <li>
              <p>💬 Ask me about React, JavaScript</p>
            </li>
          </ul>

          <h2>
            Connect with me{" "}
            <a href="https://github.com/mahfuz640/" target="_blank">
              My Web
            </a>
            <a />
          </h2>
          <a>
            <br />
            <table>
              <thead>
                <tr>
                  <th>
                    <img
                      src="https://github-readme-stats.vercel.app/api?username=sakil470004&show_icons=true&theme=tokyonight"
                      alt="sakil's github stats"
                    />
                  </th>
                  <th>
                    <img
                      src="https://github-readme-streak-stats.herokuapp.com/?user=sakil470004&theme=tokyonight"
                      alt="Aditya GitHub Streak"
                    />
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img
                      src="https://github-readme-stats.vercel.app/api/top-langs/?username=sakil470004&theme=tokyonight"
                      alt="Top Langs"
                    />
                  </td>
                  <td>
                    <img
                      src="https://github-readme-stats.vercel.app/api?username=sakil470004&show_icons=true&locale=en&count_private=true&hide_rank=true&custom_title=My%20GitHub%20Stats&disable_animations=true&theme=tokyonight"
                      alt="Github Stars"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </a>
          {/* contribution */}
          <div>
            <h2 style={{ padding: "20px 0px" }}>Contribution</h2>
            <img
              style={{ width: "100%" }}
              src="https://ghchart.rshah.org/mahfuz640"
              alt=""
            />
          </div>
          <div style={{ paddingBottom: "50px" }}>
            <h2 style={{ padding: "20px 0px", marginTop: "50px" }}>
              Code TIme
            </h2>

            <CodeTime />
          </div>
          <div style={{ paddingBottom: "50px" }}>
            <h2 style={{ padding: "20px 0px", marginTop: "50px" }}>
              Code Analytics
            </h2>

            <CodeTime />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

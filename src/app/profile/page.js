"use client";
import CodeTime from "@/components/CodeTime/CodeTime";
import Nav from "@/components/Nav/Nav";
import React from "react";

const page = () => {
  return (
    <div>
      <Nav />
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
              alt="Man-sunglasses-portrait-avatar"
              width={250}
            />
          </p>
          <h1>
            {" "}
            Hello Fellow &lt; Developers/ &gt;!{" "}
            <img
              src="https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif"
              width="20px"
            />{" "}
          </h1>
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
          </p>

          <div size="30px">
            {" "}
            Hi! My name is Mynul Islam. Thank You for taking the time to view my
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
            <a href="https://mynul-s-portfolio.netlify.app/" target="_blank">
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
            <img style={{width:'100%'}} src="https://ghchart.rshah.org/rabbi640" alt="" />
          </div>
          <div style={{paddingBottom:'50px'}} >
          <h2 style={{ padding: "20px 0px" ,marginTop:'50px' }}>Code TIme</h2>
            
          <CodeTime />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

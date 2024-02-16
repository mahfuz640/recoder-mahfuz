"use client";
import React, { useEffect, useState } from "react";
import "@/app/code/CodeEditor.css";
import { CiCloudSun } from "react-icons/ci";
import { FaHtml5 } from "react-icons/fa";
import { compiler } from "@/lib/compiler";

const CodeEditor = () => {
  const [code, setCode] = useState("// Write your code here");
  const [language, setLanguage] = useState(null);
  const [languages, setLanguages] = useState([]);
  const [stdIn, setStdIn] = useState(null);
  const [stdOut, setStdOut] = useState(null);
  const [version, setVersion] = useState("latest");
  const [dark, setDark] = useState(true);

  const handleCodeChange = (editor, data, newCode) => {
    setCode(newCode);
  };

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

  const handleVersionChange = (newVersion) => {
    setVersion(newVersion);
  };

  const handleRunCode = () => {
    if (!language) {
      // Show modal for language change
    }

    compiler({
      method: "POST",
      url: "/submissions",
      data: {
        language_id: language,
        source_code: code,
        stdin: stdIn,
      },
    }).then(({ data }) => {
      compiler(`/submissions/${data.token}`).then(({ data }) => {
        setStdOut(data.stdout);
      });
    });
  };

  const LightStyle = {
    background: "white",
    color: "black",
  };

  // Getting complier supporting languages
  useEffect(() => {
    compiler("/languages")
      .then(({ data }) => {
        // Set on page state and default
        setLanguages(data);
        setLanguage(data[0].id);
      })
      .catch(() => console.log("Something went wrong!"));
  }, []);

  return (
    <div>
      {/* <Nav /> */}

      <div className="code-editor-container" style={!dark ? LightStyle : {}}>
        <div className="sidebar" style={!dark ? LightStyle : {}}>
          <h2 style={!dark ? { color: "darkblue" } : {}}>Settings</h2>
          <label>
            Language:
            <select
              style={!dark ? { ...LightStyle, border: "1px solid gray" } : {}}
              value={language}
              onChange={(e) => handleLanguageChange(e.target.value)}
            >
              {languages.length ? (
                languages.map(({ id, name }) => {
                  return (
                    <option key={id} value={id}>
                      {name}
                    </option>
                  );
                })
              ) : (
                <option value="0">No language found</option>
              )}
            </select>
          </label>
          <label>
            Version:
            <select
              style={!dark ? { ...LightStyle, border: "1px solid gray" } : {}}
              value={version}
              onChange={(e) => handleVersionChange(e.target.value)}
            >
              <option value="latest">Latest</option>
              <option value="v1.0">Version 1.0</option>
              {/* Add more version options as needed */}
            </select>
          </label>
          <label>
            Run/ Debug Code:
            <select
              style={!dark ? { ...LightStyle, border: "1px solid gray" } : {}}
              value={language}
              // onChange={(e) => handleLanguageChange(e.target.value)}
            >
              <option value="runCode">Run Code</option>
              <option value="debugCode">Debug Code</option>
              <option value="debugStep">Debug With Step</option>
              {/* Add more language options as needed */}
            </select>
          </label>
          <h5 className="current-Mode">
            Toggle Dark{" "}
            <span
              style={!dark ? { color: "gray" } : {}}
              onClick={() => setDark(!dark)}
            >
              <CiCloudSun />
            </span>
          </h5>
          {/* here is implement extra html code editor link */}
          <h5
            style={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span><a style={{textDecoration: "none"}} href="https://mahfuz640.github.io/live-code-editor/" target="_blank">WEB EDITOR</a></span>
            <FaHtml5 />
          </h5>
        </div>
        <div
          className="code-editor"
          style={
            !dark
              ? {
                  ...LightStyle,
                  borderRight: "1px solid gray",
                  borderLeft: "1px solid gray",
                }
              : {}
          }
        >
          <textarea
            placeholder="//write your code"
            value={code}
            onChange={(e) =>
              handleCodeChange(undefined, undefined, e.target.value)
            }
            style={
              !dark
                ? { ...LightStyle, border: "1px solid gray", outline: "border" }
                : {}
            }
          ></textarea>
        </div>
        <div className="console" style={!dark ? LightStyle : {}}>
          <h2 style={!dark ? LightStyle : {}}>Console</h2>
          {stdOut}
          <button onClick={() => handleRunCode()}>RUN </button>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;

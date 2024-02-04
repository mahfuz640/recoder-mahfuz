// "use client";
// import "@/app/code/CodeEditor.css";
// import { useEffect, useState } from "react";
// import { CiCloudSun } from "react-icons/ci";
// import { FaHtml5 } from "react-icons/fa";

// const DynamicProblem = ({ params }) => {
//   const [code, setCode] = useState("// Write your code here");
//   const [language, setLanguage] = useState("javascript");
//   const [version, setVersion] = useState("latest");
//   const [dark, setDark] = useState(true);
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch(`/api/getquiz/${params.id}`);
//         const postData = await res.json();
//         console.log(postData);
//         setData(postData);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [params.id]);

//   const handleCodeChange = (editor, data, newCode) => {
//     setCode(newCode);
//   };

//   // Your other functions...

//   const handleLanguageChange = (newLanguage) => {
//     setLanguage(newLanguage);
//   };

//   const handleVersionChange = (newVersion) => {
//     setVersion(newVersion);
//   };

//   const LightStyle = {
//     background: "white",
//     color: "black",
//   };

//   if (loading) {
//     return <p>Loading...</p>;
//   }
//   return (
//     <>
//       <div className="code-editor-container" style={!dark ? LightStyle : {}}>
//         <div className="sidebar" style={!dark ? LightStyle : {}}>
//           <h2 style={!dark ? { color: "darkblue" } : {}}>Settings</h2>
//           <label>
//             Language:
//             <select
//               style={!dark ? { ...LightStyle, border: "1px solid gray" } : {}}
//               value={language}
//               onChange={(e) => handleLanguageChange(e.target.value)}
//             >
//               {/* {
//               data.map(dt=><option value={dt} key={dt}>{dt}</option>)
//             } */}
//               <option value="javascript">JavaScript</option>
//               <option value="python">Python</option>
//               <option value="C++">C++</option>
//               <option value="Java">Java</option>
//               <option value="PHP">Php</option>
//               <option value="Kotlin">Kotlin</option>
//               <option value="Ruby">Ruby</option>
//               <option value="C Language">C Language</option>
//               {/* Add more language options as needed */}
//             </select>
//           </label>
//           <label>
//             Version:
//             <select
//               style={!dark ? { ...LightStyle, border: "1px solid gray" } : {}}
//               value={version}
//               onChange={(e) => handleVersionChange(e.target.value)}
//             >
//               <option value="latest">Latest</option>
//               <option value="v1.0">Version 1.0</option>
//               {/* Add more version options as needed */}
//             </select>
//           </label>
//           <label>
//             Run/ Debug Code:
//             <select
//               style={!dark ? { ...LightStyle, border: "1px solid gray" } : {}}
//               value={language}
//               // onChange={(e) => handleLanguageChange(e.target.value)}
//             >
//               <option value="runCode">Run Code</option>
//               <option value="debugCode">Debug Code</option>
//               <option value="debugStep">Debug With Step</option>
//               {/* Add more language options as needed */}
//             </select>
//           </label>
//           <h5 className="current-Mode">
//             Toggle Dark{" "}
//             <span
//               style={!dark ? { color: "gray" } : {}}
//               onClick={() => setDark(!dark)}
//             >
//               <CiCloudSun />
//             </span>
//           </h5>
//           {/* here is implement extra html code editor link */}
//           <h5
//             style={{
//               cursor: "pointer",
//               display: "flex",
//               justifyContent: "space-between",
//               alignItems: "center",
//             }}
//           >
//             <span>WEB EDITOR</span>
//             <FaHtml5 />
//           </h5>
//         </div>
//         <div className="sidebar" style={!dark ? LightStyle : {}}>
//           <div style={{ margin: "4px" }}>
//             <h2 style={!dark ? { color: "darkblue" } : {}}>Question:</h2>
//             <label>Language:</label>
//             <p>{data.quiz.question}</p>
//           </div>
//         </div>
//         <div
//           className="code-editor"
//           style={
//             !dark
//               ? {
//                   ...LightStyle,
//                   borderRight: "1px solid gray",
//                   borderLeft: "1px solid gray",
//                 }
//               : {}
//           }
//         >
//           <textarea
//             placeholder="//write your code"
//             style={
//             !dark
//              ? { ...LightStyle, border: "1px solid gray", outline: "border" }
//                 : {}
//             }
//           ></textarea>
//         </div>
//         <div className="console" style={!dark ? LightStyle : {}}>
//           <h2 style={!dark ? LightStyle : {}}>Console</h2>
//           {/* Add a console display here */}
//           <button>RUN </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default DynamicProblem;

"use client";
import React, { useEffect, useState } from "react";
import "@/app/code/CodeEditor.css";
import { CiCloudSun } from "react-icons/ci";
import { FaHtml5 } from "react-icons/fa";
import useCodeEditor from "@/components/MangeCode/ManageCode";

const CodeEditor = ({ params }) => {
  const {
    code,
    language,
    languages,
    stdIn,
    stdOut,
    version,
    dark,
    handleCodeChange,
    handleLanguageChange,
    handleVersionChange,
    handleRunCode,
    toggleDarkMode,
  } = useCodeEditor(params);

  const LightStyle = {
    background: "white",
    color: "black",
  };
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/getquiz/${params.id}`);
        const postData = await res.json();
        console.log(postData.quiz);
        setData(postData.quiz);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [params.id]);

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
              onClick={toggleDarkMode} // Use the toggleDarkMode function from the hook
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
            <span>WEB EDITOR</span>
            <FaHtml5 />
          </h5>
        </div>
        <div className="sidebar" style={!dark ? LightStyle : {}}>
          <div style={{ margin: "4px" }}>
            <h2 style={!dark ? { color: "darkblue" } : {}}>Question:</h2>
            <label>solve this:</label>
            <p>{data?.question}</p>
          </div>
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

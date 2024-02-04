"use client";
import { useState, useEffect } from "react";
import { compiler } from "@/lib/compiler";

const useCodeEditor = (initialParams) => {
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

  const toggleDarkMode = () => {
    setDark((prevDark) => !prevDark);
  };

  // Getting compiler supporting languages
  useEffect(() => {
    compiler("/languages")
      .then(({ data }) => {
        // Set on-page state and default
        setLanguages(data);
        setLanguage(data[0]?.id); // Use optional chaining to avoid errors if data[0] is undefined
      })
      .catch(() => console.log("Something went wrong!"));
  }, []);

  return {
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
  };
};

export default useCodeEditor;

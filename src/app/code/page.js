"use client";
import React, { useState } from "react";
import "@/app/code/CodeEditor.css";
import Nav from "@/components/Nav/Nav";
import { CiCloudSun } from "react-icons/ci";

const CodeEditor = () => {
    const [code, setCode] = useState("// Write your code here");
    const [language, setLanguage] = useState("javascript");
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
    const LightStyle = {
        background: "white",
        color: "black",
    };

    return ( <
        div >
        <
        Nav / >

        <
        div className = "code-editor-container"
        style = {!dark ? LightStyle : {} } >
        <
        div className = "sidebar"
        style = {!dark ? LightStyle : {} } >
        <
        h2 style = {!dark ? { color: "darkblue" } : {} } > Settings < /h2> <
        label >
        Language:
        <
        select style = {!dark ? {...LightStyle, border: "1px solid gray" } : {} }
        value = { language }
        onChange = {
            (e) => handleLanguageChange(e.target.value)
        } > {
            /* {
                          data.map(dt=><option value={dt} key={dt}>{dt}</option>)
                        } */
        } <
        option value = "javascript" > JavaScript < /option> <
        option value = "python" > Python < /option> <
        option value = "python" > C++ < /option> <


        { /* Add more language options as needed */ } <
        /select> < /
        label > <
        label >
        Version:
        <
        select style = {!dark ? {...LightStyle, border: "1px solid gray" } : {} }
        value = { version }
        onChange = {
            (e) => handleVersionChange(e.target.value)
        } >
        <
        option value = "latest" > Latest < /option> <
        option value = "v1.0" > Version 1.0 < /option> { / * Add more version options as needed * / } < /
        select > <
        /label> <
        label >
        Run / Debug Code:
        <
        select style = {!dark ? {...LightStyle, border: "1px solid gray" } : {} }
        value = { language }
        // onChange={(e) => handleLanguageChange(e.target.value)}
        >
        <
        option value = "runCode" > Run Code < /option> <
        option value = "debugCode" > Debug Code < /option> <
        option value = "debugStep" > Debug With Step < /option> { / * Add more language options as needed * / } < /
        select > <
        /label> <
        h5 className = "current-Mode" >
        Toggle Dark { " " } <
        span style = {!dark ? { color: 'gray' } : {} }
        onClick = {
            () => setDark(!dark)
        } >
        <
        CiCloudSun / >
        <
        /span> < /
        h5 > <
        /div> <
        div className = "code-editor"
        style = {!dark ? {
                ...LightStyle,
                borderRight: "1px solid gray",
                borderLeft: "1px solid gray",
            } : {}
        } >
        <
        textarea placeholder = "//write your code"
        style = {!dark ? {...LightStyle, border: "1px solid gray", outline: "border" } : {}
        } >
        <
        /textarea> <
        button > RUN < /button> < /
        div > <
        div className = "console"
        style = {!dark ? LightStyle : {} } >
        <
        h2 style = {!dark ? LightStyle : {} } > Console < /h2> { / * Add a console display here * / } < /
        div > <
        /div> < /
        div >
    );
};

export default CodeEditor;
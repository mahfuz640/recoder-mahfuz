'use client'
import React, { useState } from 'react'
import "@/app/code/CodeEditor.css";


const CodeconverterPage = () => {
  const [language, setLanguage] = useState(null);
  const [languages, setLanguages] = useState([]);
  



  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <>
    <div style={{ textAlign: "center" }}>
  <button style={{ backgroundColor: "green", color: "white", borderRadius: "12px" }}>Convert</button>
</div>

    <div className="code-editor-container" >
      
    <div className="code-editor">
         {/* <div className="" >
         <label>
            Language:
            <select
             
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
         </div> */}
         
         <div>
         <label >
  <select style={{ backgroundColor: "wheat" }}  name='options'>
    <option value="0">Select your language</option>
    <option value="25k">Javascript</option>
    <option value="25-50k">Python</option>
    <option value="50-100k">c/c++</option>
    <option value="100k+">Ruby</option>
  </select>
</label>
         </div>
         
          <textarea style={{backgroundColor: "black", color: "white"}}
            placeholder="//write your code"
          >
            
          </textarea>
        </div>
       
        <div style={{ backgroundColor:"black", color:"white" }} className="code-editor" >
        <div style={{ padding: "10px"}}>
        <label  class="custom-select">
  <select style={{ backgroundColor: "wheat" }}  name='options'>
  <option value="0">Select your language</option>
    <option value="25k">Javascript</option>
    <option value="25-50k">Python</option>
    <option value="50-100k">c/c++</option>
    <option value="100k+">Ruby</option>
  </select>
  </label>
        </div>
        <textarea style={{backgroundColor: "black", color: "white"}}
            placeholder="converted code"
          >
            
          </textarea>
       
          
        </div>
       
    </div>
    
    </>
  )
}

export default CodeconverterPage
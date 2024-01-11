import React from "react";
import './CodeTime.css'
import Link from "next/link";
const CodeTime = (props) => {
  return (
    <div class="table-wrapper">
      <table class="fl-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Time</th>
            <th>Programming Language</th>
            <th>Problem Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>12/3/23</td>
            <td>12:32 pm</td>
            <td>C++</td>
            <td><Link href={'#'}>Loop Ran</Link></td>
          </tr>
          <tr>
            <td>2</td>
            <td>12/3/23</td>
            <td>12:32 pm</td>
            <td>Java</td>
            <td>Loop Ran</td>
          </tr>
          <tr>
            <td>3</td>
            <td>12/3/23</td>
            <td>12:32 pm</td>
            <td>C++</td>
            <td>Loop Ran</td>
          </tr>
          <tr>
            <td>4</td>
            <td>12/3/23</td>
            <td>12:32 pm</td>
            <td>Python</td>
            <td>Loop Ran</td>
          </tr>
                  </tbody>
      </table>
      ,
    </div>
  );
};
export default CodeTime;

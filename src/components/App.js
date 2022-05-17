import "./App.css";
import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { xml } from '@codemirror/lang-xml';

function App() {
  const [js, setJS] = useState("");
  const [html, setHtml] = useState("");

  const srcDoc = `
    <html>
      <body> ${html} </body>
      <style> </style>
      <script>${js}</script>
    </html>
  `;
  return (
    <div className="main-container">
      <div className="top-pane">
        <div className="first-codemirror-container">
          <p> Aqui va el JS</p>
          <CodeMirror
            value={js}
            width='500px'
            height="200px"
            extensions={[javascript({ jsx: true })]}
            onChange={(value) => {
              console.log(value);
              setJS(value)
            }}
            theme='dark'
          />
        </div>
        <p> Aqui va el HTML</p>

        <div className="second-codemirror-container">
          <CodeMirror
            value={html}
            width='500px'
            height="200px"
            extensions={[xml()]}
            onChange={(value) => {
              console.log("value:", value);
              setHtml(value)
            }}
            theme='dark'
          />
        </div>
      </div>
      <p> Aqui va el resultado</p>
      <div className="pane">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
}

export default App;

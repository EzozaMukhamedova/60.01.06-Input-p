// import { useState, useEffect } from "react";
// import "./App.css";

// function App() {
//   const [text, setText] = useState("Hello, World!");

//   return (
//     <div>
//       <p>{text ? text : "p"}</p>
//       <input
//         type="text"
//         placeholder="nimadur yozing..."
//         value={text}
//         onChange={(e) => {
//           setText(e.target.value);
//         }}
//       />
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [displayedText, setDisplayedText] = useState("");

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleButtonClick = () => {
    setDisplayedText(text);
  };

  return (
    <div>
      <p>{displayedText ? displayedText : "Yozganingiz chiqadi!"}</p>
      <div className="input-wrapper">
        <input
          type="text"
          placeholder="nimadur yozing..."
          value={text}
          onChange={handleInputChange}
        />
        <button onClick={handleButtonClick}>Bosing</button>
      </div>
    </div>
  );
}

export default App;

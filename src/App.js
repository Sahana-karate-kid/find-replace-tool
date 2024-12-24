import React, { useState } from "react";
import TextEditor from "./components/TextEditor";
import FindReplaceModal from "./components/FindReplaceModal";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFindAndReplace = (findText, replaceText) => {
    debugger;
    const updatedText = text.split(findText).join(replaceText);
    setText(updatedText);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Find and Replace Tool</h1>
      <TextEditor text={text} setText={setText} />
      <button onClick={() => setIsModalOpen(true)}>Find & Replace</button>
      <button style={{ margin: "20px" }} onClick={() => setText("")}>
        Clear
      </button>
      {isModalOpen && (
        <FindReplaceModal
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleFindAndReplace}
        />
      )}
    </div>
  );
}

export default App;

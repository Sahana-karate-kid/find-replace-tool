import React, { useState } from "react";
import TextEditor from "./components/TextEditor";
import FindReplaceModal from "./components/FindReplaceModal";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFindAndReplace = (findText, replaceText) => {
    alert(
      `Replacing ${findText} with ${replaceText}. This action is irreversible.`
    );
    if (findText) {
      const regex = new RegExp(`\\b${findText}\\b`, "gi"); // Case-insensitive global search
      const updatedText = text.replace(regex, replaceText);
      setText(updatedText);
    }
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

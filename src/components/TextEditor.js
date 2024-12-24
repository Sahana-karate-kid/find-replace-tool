import React from "react";

function TextEditor({ text, setText }) {
  return (
    <textarea
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder="Enter your text here..."
    />
  );
}

export default TextEditor;

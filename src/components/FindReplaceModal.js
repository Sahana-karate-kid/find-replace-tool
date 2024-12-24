import React, { useState } from "react";
import "./FindReplaceModal.css";

function FindReplaceModal({ onClose, onSubmit }) {
  const [findText, setFindText] = useState("");
  const [replaceText, setReplaceText] = useState("");

  const handleSubmit = () => {
    onSubmit(findText, replaceText);
    onClose();
  };

  return (
    <>
      <div className="modal-backdrop" onClick={onClose}></div>
      <div className="modal">
        <h2>Find and Replace</h2>

        <input
          type="text"
          className="modal-input"
          placeholder="Find"
          value={findText}
          onChange={(e) => setFindText(e.target.value)}
        />

        <input
          type="text"
          className="modal-input"
          placeholder="Replace"
          value={replaceText}
          onChange={(e) => setReplaceText(e.target.value)}
        />

        <div className="modal-buttons">
          <button className="modal-button" onClick={handleSubmit}>
            Submit
          </button>
          <button
            className="modal-button modal-button-cancel"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
}

export default FindReplaceModal;

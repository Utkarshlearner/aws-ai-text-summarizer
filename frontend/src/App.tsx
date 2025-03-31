import React, { useState } from "react";
import axios from "axios";
import "./App.css";

const API_URL = ""; // Replace with actual API URL

function App() {
  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSummarize = async () => {
    setLoading(true);
    try {
      const response = await axios.post(API_URL, { text });
      // console.log("Summary:", response.data.summary);
      setSummary(response.data.summary);
    } catch (error) {
      console.error("Error:", error);
      setSummary("Error fetching summary.");
    }
    setLoading(false);
  };

  return (
    <div className="container">
      <h1>AI Text Summarizer</h1>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to summarize"
      />
      <button onClick={handleSummarize} disabled={loading}>
        {loading ? "Summarizing..." : "Summarize"}
      </button>
      {summary && <p><strong>Summary:</strong> {summary}</p>}
    </div>
  );
}

export default App;
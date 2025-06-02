import React, { useState } from "react";

const Scraper = () => {
  const [url, setUrl] = useState("");
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleScrape = async () => {
    if (!url) return;

    setLoading(true);
    setError("");
    setData("");

    try {
      const response = await fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`);
      if (!response.ok) throw new Error("Failed to fetch website content");
      const text = await response.text();
      setData(text);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    } 
  };

  return (
    <div style={{ padding: "1rem", maxWidth: "600px", margin: "auto" }}>
      <h2>Simple Web Scraper</h2>
      <input
        type="text"
        placeholder="Enter website URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        style={{ width: "100%", padding: "0.5rem", marginBottom: "1rem" }}
      />
      <button onClick={handleScrape} style={{ padding: "0.5rem 1rem" }}>
        Scrape
      </button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {data && (
        <div style={{ marginTop: "1rem", whiteSpace: "pre-wrap", maxHeight: "300px", overflowY: "auto", border: "1px solid #ccc", padding: "1rem" }}>
          {data}
        </div>
      )}
    </div>
  );
};

export default Scraper;

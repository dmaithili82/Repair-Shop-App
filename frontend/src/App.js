import React, { useEffect, useState } from "react";

function App() {
  const [repairs, setRepairs] = useState([]);

  useEffect(() => {
    fetch("https://d34trdzkornr1s.cloudfront.net/api/repairs")
      .then((res) => res.json())
      .then((data) => setRepairs(data))
      .catch((err) => console.error("Error fetching repairs:", err));
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>🔧 Repair Shop Management App</h1>
      <p>Here are current repairs from backend:</p>
      {repairs.length === 0 ? (
        <p>Loading repairs...</p>
      ) : (
        <ul>
          {repairs.map((r) => (
            <li key={r.id}>
              <strong>{r.device}</strong> — {r.issue}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;


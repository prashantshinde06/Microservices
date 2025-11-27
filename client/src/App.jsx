import { useState } from "react";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [getDataResult, setGetDataResult] = useState("");

  // Send data to Spring Boot
   const API_URL_BOOT = `${window.location.protocol}//${window.location.hostname}:9090`;
  const handleSend = async () => {
    try {
      const response = await fetch(`${API_URL_BOOT}/api/data/save`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: inputValue }),
      });

      const data = await response.json();
      alert("Response from Spring: " + data.response);
    } catch (error) {
      console.error(error);
      alert("Error sending data");
    }
  };

  // Get data from Node.js
  const API_URL_NODE = `${window.location.protocol}//${window.location.hostname}:5000`;
  const handleGetData = async () =>
  {
    try {
      const response = await fetch(`${API_URL_NODE}/api/get`);
      const data = await response.json();
      setGetDataResult(data.result);
    } catch (err) {
      console.error(err);
      alert("Error fetching data");
    }
  };

  return (
    <div style={styles.container}>
      {/* LEFT SECTION */}
      <div style={styles.section}>
        <h2>Spring Service</h2>
        
        <input
          type="text"
          placeholder="Enter message"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          style={styles.input}
        />

        <button style={styles.button} onClick={handleSend}>
          Send to Spring
        </button>
      </div>

      {/* RIGHT SECTION */}
      <div style={styles.section}>
        <h2>Node.js Service</h2>

        <button style={styles.button} onClick={handleGetData}>
          Get Data
        </button>

        <p style={styles.resultBox}>
          {getDataResult ? getDataResult : "No data fetched yet"}
        </p>
      </div>
    </div>
  );
}

// Inline styles
const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    padding: "40px",
    height: "100vh",
    boxSizing: "border-box"
  },
  section: {
    width: "45%",
    padding: "20px",
    border: "2px solid #ddd",
    borderRadius: "10px",
    background: "#fafafa",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginTop: "10px",
    marginBottom: "20px",
    fontSize: "16px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    background: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
  },
  resultBox: {
    marginTop: "20px",
    padding: "10px",
    background: "#fff",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
};

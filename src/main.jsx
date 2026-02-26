import React from "react"
import ReactDOM from "react-dom/client"
import "./main.css" // if you moved root/main.css to src/main.css

function App() {
  return <h1>TPD Interactive</h1>
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
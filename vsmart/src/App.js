import "./index.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link
} from "react-router-dom";
import Home from "./route/Home.js";

export default function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

import React from "react";
import {Routes, Route, BrowserRouter as Router} from "react-router-dom";
import "./App.scss";
import Main from "./containers/Main";
import ProjectPages from "./projectPages/ProjectPages";

function App() {
  return (
    <React.StrictMode>
    <Router>
      <div>
        <Routes>
          <Route index element={<Main />} />
          {ProjectPages()}
        </Routes>
      </div>
    </Router> >
    </React.StrictMode>
  );
}

function About() {
  return <h2>About</h2>;
}

export default App;
